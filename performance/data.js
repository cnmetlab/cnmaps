window.BENCHMARK_DATA = {
  "lastUpdate": 1660841784884,
  "repoUrl": "https://github.com/cnmetlab/cnmaps",
  "entries": {
    "cnmaps Benchmark": [
      {
        "commit": {
          "author": {
            "email": "clarmylee92510@gmail.com",
            "name": "Wentao Li",
            "username": "Clarmy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97099415f0d13ba60d17e76e6bba34a512e71764",
          "message": "tests: simplify tests and add test_perf (#76)",
          "timestamp": "2022-08-18T20:19:46+08:00",
          "tree_id": "bc7e935222ab0306e9e35c46597982e7d14fe9c1",
          "url": "https://github.com/cnmetlab/cnmaps/commit/97099415f0d13ba60d17e76e6bba34a512e71764"
        },
        "date": 1660830507876,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.2838941305358435,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5224398549999023 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.06108509482872788,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.37060567399999 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.0616008061753193,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.233553780999955 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.06127582741443335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.319649072000175 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.06134872504444878,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.300257247000218 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.061654855851825244,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.219322650000095 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.14274281432547997,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.005606584999896 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.11676490457140105,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.564217165000173 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 1.6017770280934835,
            "unit": "iter/sec",
            "range": "stddev: 0.04544187858883427",
            "extra": "mean: 624.3066184999861 msec\nrounds: 2"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.1957615106064062,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.108256454000184 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "cnmetlab",
            "username": "cnmetlab"
          },
          "committer": {
            "name": "cnmetlab",
            "username": "cnmetlab"
          },
          "id": "ecd86b6d27449f6d848008f1ac1908bc61daae43",
          "message": "perf: use \"append\" instead of \"+=\"",
          "timestamp": "2022-08-16T10:22:02Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/78/commits/ecd86b6d27449f6d848008f1ac1908bc61daae43"
        },
        "date": 1660834549165,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.17712566540978122,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.645709206999982 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.04543932171204998,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.007370759999958 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.04631181040329858,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.592764163000083 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.045744980713451636,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.860321818999978 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.0459352359041004,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.769780437999998 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.045789345235433154,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.83914172300001 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.09721320927639784,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.286667907000037 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.0798505099375456,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.523401551000006 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 1.0855805572327946,
            "unit": "iter/sec",
            "range": "stddev: 0.017477994595366593",
            "extra": "mean: 921.1660924999023 msec\nrounds: 2"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.1333646952150216,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.498236309000049 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "cnmetlab",
            "username": "cnmetlab"
          },
          "committer": {
            "name": "cnmetlab",
            "username": "cnmetlab"
          },
          "id": "97099415f0d13ba60d17e76e6bba34a512e71764",
          "message": "1.1",
          "timestamp": "2022-08-16T10:22:02Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/79/commits/97099415f0d13ba60d17e76e6bba34a512e71764"
        },
        "date": 1660841780558,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.27814888278097094,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5951968959999476 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.05737949283041936,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.427829189000022 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05704385346712322,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.53037249800002 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.05774510122884016,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.317486309999936 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.05612852872646231,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.816251782999984 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.057951017823837464,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.255952311999977 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.14363765968105757,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.961962497999934 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.11799354486908775,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.47503989400002 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 1.7785173137329005,
            "unit": "iter/sec",
            "range": "stddev: 0.0006042432506065411",
            "extra": "mean: 562.2661035000647 msec\nrounds: 2"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.20843736363988902,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.797604337999928 sec\nrounds: 1"
          }
        ]
      }
    ]
  }
}