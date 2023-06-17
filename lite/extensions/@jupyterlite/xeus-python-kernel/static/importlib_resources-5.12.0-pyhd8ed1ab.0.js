
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
      var PACKAGE_NAME = 'importlib_resources-5.12.0-pyhd8ed1ab.0.data';
      var REMOTE_PACKAGE_BASE = 'importlib_resources-5.12.0-pyhd8ed1ab.0.data';
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
Module['FS_createPath']("/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages", "importlib_resources-5.12.0.dist-info", true, true);
Module['FS_createPath']("/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages", "importlib_resources", true, true);

      function processPackageData(arrayBuffer) {
        assert(arrayBuffer, 'Loading data file failed.');
        assert(arrayBuffer.constructor.name === ArrayBuffer.name, 'bad input to processPackageData');
        var byteArray = new Uint8Array(arrayBuffer);
        var curr;
        var compressedData = {"data":null,"cachedOffset":17860,"cachedIndexes":[-1,-1],"cachedChunks":[null,null],"offsets":[0,1269,2150,3448,4684,5975,7155,8337,9683,10907,11997,13148,14381,15665,16895],"sizes":[1269,881,1298,1236,1291,1180,1182,1346,1224,1090,1151,1233,1284,1230,965],"successes":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]}
;
            compressedData['data'] = byteArray;
            assert(typeof Module['LZ4'] === 'object', 'LZ4 not present - was your app build with -sLZ4?');
            Module['LZ4'].loadPackage({ 'metadata': metadata, 'compressedData': compressedData }, true);
            Module['removeRunDependency']('datafile_importlib_resources-5.12.0-pyhd8ed1ab.0.data');
      };
      Module['addRunDependency']('datafile_importlib_resources-5.12.0-pyhd8ed1ab.0.data');

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
loadPackage({"files": [{"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/conda-meta/importlib_resources-5.12.0-pyhd8ed1ab_0.json", "start": 0, "end": 96}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/importlib_resources-5.12.0.dist-info/direct_url.json", "start": 96, "end": 211}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/importlib_resources/__init__.py", "start": 211, "end": 717}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/importlib_resources/_adapters.py", "start": 717, "end": 5199}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/importlib_resources/_common.py", "start": 5199, "end": 10656}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/importlib_resources/_compat.py", "start": 10656, "end": 13591}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/importlib_resources/_itertools.py", "start": 13591, "end": 14868}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/importlib_resources/_legacy.py", "start": 14868, "end": 18349}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/importlib_resources/abc.py", "start": 18349, "end": 23489}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/importlib_resources/readers.py", "start": 23489, "end": 27801}, {"filename": "/tmp/xeus-python-kernel/envs/xeus-python-kernel/lib/python3.10/site-packages/importlib_resources/simple.py", "start": 27801, "end": 30377}]});
  })();
