
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
      var PACKAGE_NAME = 'wcwidth-0.2.6-pyhd8ed1ab.0.data';
      var REMOTE_PACKAGE_BASE = 'wcwidth-0.2.6-pyhd8ed1ab.0.data';
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
Module['FS_createPath']("/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages", "wcwidth-0.2.6.dist-info", true, true);
Module['FS_createPath']("/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages", "wcwidth", true, true);

      function processPackageData(arrayBuffer) {
        assert(arrayBuffer, 'Loading data file failed.');
        assert(arrayBuffer.constructor.name === ArrayBuffer.name, 'bad input to processPackageData');
        var byteArray = new Uint8Array(arrayBuffer);
        var curr;
        var compressedData = {"data":null,"cachedOffset":207994,"cachedIndexes":[-1,-1],"cachedChunks":[null,null],"offsets":[0,1384,2364,3415,4531,5583,6668,7763,8877,9956,11052,12166,13240,14349,15461,16578,17650,18735,19911,21108,22158,23302,24521,25595,26687,27869,29081,30150,31273,32433,33629,34685,35799,37000,38182,39241,40357,41582,42758,43830,44882,46089,47258,48321,49365,50564,51755,52621,53502,54421,55428,56390,57160,58118,59096,60096,60986,61796,62708,63648,64622,65674,66451,67284,68178,69093,70118,71031,72114,72867,73723,74598,75508,76545,77496,78519,79350,80163,81065,82021,82990,83905,84776,85834,86600,87466,88345,89251,90262,91184,92144,93126,93897,94788,95677,96560,97547,98488,99524,100450,101237,102171,103106,104046,105025,106026,106847,107875,108792,109591,110513,111455,112409,113350,114350,115189,116207,117205,117999,118876,119763,120646,121617,122595,123493,124304,125198,126237,127007,127863,128771,129712,130696,131604,132606,133427,134292,135200,136177,136985,137861,138741,139640,140626,141562,142523,143373,144189,145118,146112,146909,147776,148662,149592,150559,151446,152453,153277,154092,154942,156085,156922,157711,158623,159551,160513,161427,162422,163278,164111,164971,165969,166919,167732,168644,169534,170423,171414,172365,173320,174154,174950,175826,176935,177765,178568,179487,180404,181362,182295,183298,184194,185020,185862,186735,187786,188583,189378,190302,191227,192179,193094,194094,195000,195822,196645,197490,198862,200431,201823,203120,204547,205908,206991],"sizes":[1384,980,1051,1116,1052,1085,1095,1114,1079,1096,1114,1074,1109,1112,1117,1072,1085,1176,1197,1050,1144,1219,1074,1092,1182,1212,1069,1123,1160,1196,1056,1114,1201,1182,1059,1116,1225,1176,1072,1052,1207,1169,1063,1044,1199,1191,866,881,919,1007,962,770,958,978,1000,890,810,912,940,974,1052,777,833,894,915,1025,913,1083,753,856,875,910,1037,951,1023,831,813,902,956,969,915,871,1058,766,866,879,906,1011,922,960,982,771,891,889,883,987,941,1036,926,787,934,935,940,979,1001,821,1028,917,799,922,942,954,941,1000,839,1018,998,794,877,887,883,971,978,898,811,894,1039,770,856,908,941,984,908,1002,821,865,908,977,808,876,880,899,986,936,961,850,816,929,994,797,867,886,930,967,887,1007,824,815,850,1143,837,789,912,928,962,914,995,856,833,860,998,950,813,912,890,889,991,951,955,834,796,876,1109,830,803,919,917,958,933,1003,896,826,842,873,1051,797,795,924,925,952,915,1000,906,822,823,845,1372,1569,1392,1297,1427,1361,1083,1003],"successes":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]}
;
            compressedData['data'] = byteArray;
            assert(typeof Module['LZ4'] === 'object', 'LZ4 not present - was your app build with -sLZ4?');
            Module['LZ4'].loadPackage({ 'metadata': metadata, 'compressedData': compressedData }, true);
            Module['removeRunDependency']('datafile_wcwidth-0.2.6-pyhd8ed1ab.0.data');
      };
      Module['addRunDependency']('datafile_wcwidth-0.2.6-pyhd8ed1ab.0.data');

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
loadPackage({"files": [{"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/conda-meta/wcwidth-0.2.6-pyhd8ed1ab_0.json", "start": 0, "end": 83}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/wcwidth-0.2.6.dist-info/direct_url.json", "start": 83, "end": 186}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/wcwidth/__init__.py", "start": 186, "end": 1218}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/wcwidth/table_wide.py", "start": 1218, "end": 92926}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/wcwidth/table_zero.py", "start": 92926, "end": 422021}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/wcwidth/unicode_versions.py", "start": 422021, "end": 422854}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/wcwidth/wcwidth.py", "start": 422854, "end": 437796}]});
  })();
