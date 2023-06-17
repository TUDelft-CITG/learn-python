
  var Module = typeof globalThis.Module !== 'undefined' ? globalThis.Module : {};

  if (!Module.expectedDataFileDownloads) {
    Module.expectedDataFileDownloads = 0;
  }

  Module.expectedDataFileDownloads++;
  (function() {
    // When running as a pthread, FS operations are proxied to the main thread, so we don't need to
    // fetch the .data bundle on the worker
    if (Module['ENVIRONMENT_IS_PTHREAD']) return;
    var loadPackage = function(metadata) {

      var PACKAGE_PATH = '';
      if (typeof window === 'object') {
        PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
      } else if (typeof process === 'undefined' && typeof location !== 'undefined') {
        // web worker
        PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
      }
      var PACKAGE_NAME = 'jedi-0.18.2-pyhd8ed1ab.0.data';
      var REMOTE_PACKAGE_BASE = 'jedi-0.18.2-pyhd8ed1ab.0.data';
      if (typeof Module['locateFilePackage'] === 'function' && !Module['locateFile']) {
        Module['locateFile'] = Module['locateFilePackage'];
        err('warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)');
      }
      var REMOTE_PACKAGE_NAME = Module['locateFile'] ? Module['locateFile'](REMOTE_PACKAGE_BASE, '') : REMOTE_PACKAGE_BASE;
var REMOTE_PACKAGE_SIZE = metadata['remote_package_size'];

      function fetchRemotePackage(packageName, packageSize, callback, errback) {
        
        var xhr = new XMLHttpRequest();
        xhr.open('GET', packageName, true);
        xhr.responseType = 'arraybuffer';
        xhr.onprogress = function(event) {
          var url = packageName;
          var size = packageSize;
          if (event.total) size = event.total;
          if (event.loaded) {
            if (!xhr.addedTotal) {
              xhr.addedTotal = true;
              if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
              Module.dataFileDownloads[url] = {
                loaded: event.loaded,
                total: size
              };
            } else {
              Module.dataFileDownloads[url].loaded = event.loaded;
            }
            var total = 0;
            var loaded = 0;
            var num = 0;
            for (var download in Module.dataFileDownloads) {
            var data = Module.dataFileDownloads[download];
              total += data.total;
              loaded += data.loaded;
              num++;
            }
            total = Math.ceil(total * Module.expectedDataFileDownloads/num);
            if (Module['empackSetStatus']) Module['empackSetStatus']('Downloading',PACKAGE_NAME,loaded,total);
            if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
          } else if (!Module.dataFileDownloads) {
            if (Module['setStatus']) Module['setStatus']('Downloading data...');
          }
        };
        xhr.onerror = function(event) {
          throw new Error("NetworkError for: " + packageName);
        }
        xhr.onload = function(event) {
          if (xhr.status == 200 || xhr.status == 304 || xhr.status == 206 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
            var packageData = xhr.response;
            callback(packageData);
          } else {
            throw new Error(xhr.statusText + " : " + xhr.responseURL);
          }
        };
        xhr.send(null);
      };

      function handleError(error) {
        console.error('package error:', error);
      };

      var fetchedCallback = null;
      var fetched = Module['getPreloadedPackage'] ? Module['getPreloadedPackage'](REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE) : null;

      if (!fetched) fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, function(data) {
        if (fetchedCallback) {
          fetchedCallback(data);
          fetchedCallback = null;
        } else {
          fetched = data;
        }
      }, handleError);

    function runWithFS() {

      function assert(check, msg) {
        if (!check) throw msg + new Error().stack;
      }
Module['FS_createPath']("/", "tmp", true, true);
Module['FS_createPath']("/tmp", "xeus-python-kernel", true, true);
Module['FS_createPath']("/tmp/xeus-python-kernel", "envs", true, true);
Module['FS_createPath']("/tmp/xeus-python-kernel/envs", "xeus-python-kernel", true, true);
Module['FS_createPath']("/tmp/xeus-python-kernel/envs/xeus-python-kernel", "conda-meta", true, true);
Module['FS_createPath']("/tmp/xeus-python-kernel/envs/xeus-python-kernel", "lib", true, true);
Module['FS_createPath']("/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib", "python3.10", true, true);
Module['FS_createPath']("/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10", "site-packages", true, true);
Module['FS_createPath']("/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages", "jedi-0.18.2.dist-info", true, true);
Module['FS_createPath']("/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages", "jedi", true, true);
Module['FS_createPath']("/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi", "api", true, true);
Module['FS_createPath']("/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/api", "refactoring", true, true);
Module['FS_createPath']("/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi", "inference", true, true);
Module['FS_createPath']("/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference", "compiled", true, true);
Module['FS_createPath']("/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/compiled", "subprocess", true, true);
Module['FS_createPath']("/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference", "gradual", true, true);
Module['FS_createPath']("/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference", "value", true, true);
Module['FS_createPath']("/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi", "plugins", true, true);

      function processPackageData(arrayBuffer) {
        assert(arrayBuffer, 'Loading data file failed.');
        assert(arrayBuffer.constructor.name === ArrayBuffer.name, 'bad input to processPackageData');
        var byteArray = new Uint8Array(arrayBuffer);
        var curr;
        var compressedData = {"data":null,"cachedOffset":445289,"cachedIndexes":[-1,-1],"cachedChunks":[null,null],"offsets":[0,1497,2769,4085,5601,7083,8280,9563,10842,12099,13387,14610,15828,16952,18108,19057,20080,21389,22756,24036,25260,26442,27428,28679,29987,31189,32492,33719,34991,36195,37220,38352,39488,40629,41788,42818,43992,45051,46223,47265,48322,49617,50766,51876,53200,54314,55497,56733,57906,59330,60651,61950,63128,64303,65709,66863,68197,69282,70245,71521,72812,74085,75132,76132,77122,78433,79597,80845,82007,83349,84651,85912,87040,88081,89344,90407,91419,92721,93898,95054,96206,97313,98657,99772,100937,102118,103320,104480,105629,107157,108255,109654,110812,112087,113339,114504,116040,117530,118760,119873,120983,122073,123371,124394,125739,126925,128171,129215,130381,131401,132727,133828,134937,135921,137163,138414,139541,140544,141487,142716,143818,145037,146311,147646,148825,149836,150973,152196,153374,154531,155676,156892,158208,159500,160657,161753,162954,164439,165656,167086,168186,169286,170314,171539,172629,173944,175155,176433,177751,178945,180222,181143,182169,183188,184239,185298,186201,187271,188611,189957,191129,192249,193237,194147,195167,196208,197138,198450,199696,201063,202217,203382,204740,206002,207316,208563,209766,210879,211928,213049,214206,215243,216441,217516,218961,220158,221457,222625,223826,225044,226190,227387,228601,229759,231011,232128,233343,234583,235688,236967,238114,239160,240461,241258,242356,243488,244547,245590,246760,247897,248884,250052,251080,252301,253537,254547,255512,256707,257805,258934,259988,261074,262090,263241,264370,265594,266743,268082,269560,270624,272024,273073,274344,275765,276831,278021,278997,280121,281214,282244,283381,284598,285704,286899,288127,289216,290257,291412,292590,293676,294745,295732,296868,298151,299328,300756,301881,302907,304170,305567,306692,307815,309041,310238,311408,312395,313513,314634,315660,316803,317944,319068,319962,321103,322413,323653,324496,325576,326707,328093,329221,330530,331715,332966,334143,335223,336400,337523,338708,339959,341186,342592,343783,344854,346206,347551,348954,350139,351553,352637,353897,354869,355966,356973,357893,359048,360286,361409,362443,363545,364703,365598,366728,367846,369080,370252,371445,372446,373429,374526,375618,376960,378103,379045,380173,381156,382316,383518,384645,385680,386645,387850,389182,390224,391388,392631,393660,394886,396005,397184,398311,399485,400713,401900,403121,404389,405621,406924,408030,409285,410510,411559,412705,413923,415160,416176,417279,418476,419386,420725,421854,423036,424291,425543,426645,427852,429216,430269,431462,432672,433747,434887,435920,437095,438240,439464,440674,442185,443508,444787],"sizes":[1497,1272,1316,1516,1482,1197,1283,1279,1257,1288,1223,1218,1124,1156,949,1023,1309,1367,1280,1224,1182,986,1251,1308,1202,1303,1227,1272,1204,1025,1132,1136,1141,1159,1030,1174,1059,1172,1042,1057,1295,1149,1110,1324,1114,1183,1236,1173,1424,1321,1299,1178,1175,1406,1154,1334,1085,963,1276,1291,1273,1047,1000,990,1311,1164,1248,1162,1342,1302,1261,1128,1041,1263,1063,1012,1302,1177,1156,1152,1107,1344,1115,1165,1181,1202,1160,1149,1528,1098,1399,1158,1275,1252,1165,1536,1490,1230,1113,1110,1090,1298,1023,1345,1186,1246,1044,1166,1020,1326,1101,1109,984,1242,1251,1127,1003,943,1229,1102,1219,1274,1335,1179,1011,1137,1223,1178,1157,1145,1216,1316,1292,1157,1096,1201,1485,1217,1430,1100,1100,1028,1225,1090,1315,1211,1278,1318,1194,1277,921,1026,1019,1051,1059,903,1070,1340,1346,1172,1120,988,910,1020,1041,930,1312,1246,1367,1154,1165,1358,1262,1314,1247,1203,1113,1049,1121,1157,1037,1198,1075,1445,1197,1299,1168,1201,1218,1146,1197,1214,1158,1252,1117,1215,1240,1105,1279,1147,1046,1301,797,1098,1132,1059,1043,1170,1137,987,1168,1028,1221,1236,1010,965,1195,1098,1129,1054,1086,1016,1151,1129,1224,1149,1339,1478,1064,1400,1049,1271,1421,1066,1190,976,1124,1093,1030,1137,1217,1106,1195,1228,1089,1041,1155,1178,1086,1069,987,1136,1283,1177,1428,1125,1026,1263,1397,1125,1123,1226,1197,1170,987,1118,1121,1026,1143,1141,1124,894,1141,1310,1240,843,1080,1131,1386,1128,1309,1185,1251,1177,1080,1177,1123,1185,1251,1227,1406,1191,1071,1352,1345,1403,1185,1414,1084,1260,972,1097,1007,920,1155,1238,1123,1034,1102,1158,895,1130,1118,1234,1172,1193,1001,983,1097,1092,1342,1143,942,1128,983,1160,1202,1127,1035,965,1205,1332,1042,1164,1243,1029,1226,1119,1179,1127,1174,1228,1187,1221,1268,1232,1303,1106,1255,1225,1049,1146,1218,1237,1016,1103,1197,910,1339,1129,1182,1255,1252,1102,1207,1364,1053,1193,1210,1075,1140,1033,1175,1145,1224,1210,1511,1323,1279,502],"successes":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]}
;
            compressedData['data'] = byteArray;
            assert(typeof Module['LZ4'] === 'object', 'LZ4 not present - was your app build with -sLZ4?');
            Module['LZ4'].loadPackage({ 'metadata': metadata, 'compressedData': compressedData }, true);
            Module['removeRunDependency']('datafile_jedi-0.18.2-pyhd8ed1ab.0.data');
      };
      Module['addRunDependency']('datafile_jedi-0.18.2-pyhd8ed1ab.0.data');

      if (!Module.preloadResults) Module.preloadResults = {};

      Module.preloadResults[PACKAGE_NAME] = {fromCache: false};
      if (fetched) {
        processPackageData(fetched);
        fetched = null;
      } else {
        fetchedCallback = processPackageData;
      }

    }
    if (Module['calledRun']) {
      runWithFS();
    } else {
      if (!Module['preRun']) Module['preRun'] = [];
      Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
    }

    }
loadPackage({"files": [{"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/conda-meta/jedi-0.18.2-pyhd8ed1ab_0.json", "start": 0, "end": 81}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi-0.18.2.dist-info/direct_url.json", "start": 81, "end": 181}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/__init__.py", "start": 181, "end": 1667}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/__main__.py", "start": 1667, "end": 3617}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/_compatibility.py", "start": 3617, "end": 4535}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/api/__init__.py", "start": 4535, "end": 35805}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/api/classes.py", "start": 35805, "end": 65442}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/api/completion.py", "start": 65442, "end": 92633}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/api/completion_cache.py", "start": 92633, "end": 93587}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/api/environment.py", "start": 93587, "end": 110543}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/api/errors.py", "start": 110543, "end": 111796}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/api/exceptions.py", "start": 111796, "end": 112786}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/api/file_name.py", "start": 112786, "end": 118406}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/api/helpers.py", "start": 118406, "end": 137388}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/api/interpreter.py", "start": 137388, "end": 139803}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/api/keywords.py", "start": 139803, "end": 141086}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/api/project.py", "start": 141086, "end": 157629}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/api/refactoring/__init__.py", "start": 157629, "end": 166680}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/api/refactoring/extract.py", "start": 166680, "end": 180613}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/api/replstartup.py", "start": 180613, "end": 181563}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/api/strings.py", "start": 181563, "end": 185179}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/cache.py", "start": 185179, "end": 188853}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/common.py", "start": 188853, "end": 189521}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/debug.py", "start": 189521, "end": 193025}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/file_io.py", "start": 193025, "end": 195362}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/__init__.py", "start": 195362, "end": 203804}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/analysis.py", "start": 203804, "end": 211567}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/arguments.py", "start": 211567, "end": 223785}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/base_value.py", "start": 223785, "end": 242004}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/cache.py", "start": 242004, "end": 246195}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/compiled/__init__.py", "start": 246195, "end": 248846}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/compiled/access.py", "start": 248846, "end": 267288}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/compiled/getattr_static.py", "start": 267288, "end": 271150}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/compiled/mixed.py", "start": 271150, "end": 282502}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/compiled/subprocess/__init__.py", "start": 282502, "end": 295992}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/compiled/subprocess/__main__.py", "start": 295992, "end": 297159}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/compiled/subprocess/functions.py", "start": 297159, "end": 305892}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/compiled/value.py", "start": 305892, "end": 326418}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/context.py", "start": 326418, "end": 343582}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/docstring_utils.py", "start": 343582, "end": 344341}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/docstrings.py", "start": 344341, "end": 354165}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/dynamic_params.py", "start": 354165, "end": 362287}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/filters.py", "start": 362287, "end": 374780}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/finder.py", "start": 374780, "end": 380106}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/flow_analysis.py", "start": 380106, "end": 384689}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/gradual/__init__.py", "start": 384689, "end": 384832}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/gradual/annotation.py", "start": 384832, "end": 400764}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/gradual/base.py", "start": 400764, "end": 416318}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/gradual/conversion.py", "start": 416318, "end": 423919}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/gradual/generics.py", "start": 423919, "end": 427063}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/gradual/stub_value.py", "start": 427063, "end": 430448}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/gradual/type_var.py", "start": 430448, "end": 434587}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/gradual/typeshed.py", "start": 434587, "end": 446054}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/gradual/typing.py", "start": 446054, "end": 463284}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/gradual/utils.py", "start": 463284, "end": 464431}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/helpers.py", "start": 464431, "end": 470374}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/imports.py", "start": 470374, "end": 493456}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/lazy_value.py", "start": 493456, "end": 495123}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/names.py", "start": 495123, "end": 518337}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/param.py", "start": 518337, "end": 528787}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/parser_cache.py", "start": 528787, "end": 528978}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/recursion.py", "start": 528978, "end": 533910}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/references.py", "start": 533910, "end": 545317}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/signature.py", "start": 545317, "end": 550176}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/star_args.py", "start": 550176, "end": 558071}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/syntax_tree.py", "start": 558071, "end": 593822}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/sys_path.py", "start": 593822, "end": 604040}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/utils.py", "start": 604040, "end": 606746}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/value/__init__.py", "start": 606746, "end": 607162}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/value/decorator.py", "start": 607162, "end": 608369}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/value/dynamic_arrays.py", "start": 608369, "end": 615896}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/value/function.py", "start": 615896, "end": 633320}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/value/instance.py", "start": 633320, "end": 655831}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/value/iterable.py", "start": 655831, "end": 679136}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/value/klass.py", "start": 679136, "end": 695076}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/value/module.py", "start": 695076, "end": 703194}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/inference/value/namespace.py", "start": 703194, "end": 705295}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/parser_utils.py", "start": 705295, "end": 716195}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/plugins/__init__.py", "start": 716195, "end": 717640}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/plugins/django.py", "start": 717640, "end": 728535}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/plugins/flask.py", "start": 728535, "end": 729451}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/plugins/pytest.py", "start": 729451, "end": 738115}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/plugins/registry.py", "start": 738115, "end": 738422}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/plugins/stdlib.py", "start": 738422, "end": 768624}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/settings.py", "start": 768624, "end": 772150}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/jedi/utils.py", "start": 772150, "end": 776854}]});
  })();
