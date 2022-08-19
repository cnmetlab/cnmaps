window.BENCHMARK_DATA = {
  "lastUpdate": 1660915367338,
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
      },
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
          "id": "ae9af01cd91fddf0e99decd971dc5dbe3ecdf3dc",
          "message": "1.1 (#79)",
          "timestamp": "2022-08-19T10:39:48+08:00",
          "tree_id": "670e04271cace75138a9b890a3764840154250c2",
          "url": "https://github.com/cnmetlab/cnmaps/commit/ae9af01cd91fddf0e99decd971dc5dbe3ecdf3dc"
        },
        "date": 1660878278912,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.1766398774104566,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.661235812999962 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.05501403162859306,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.177180810000095 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05451236733342696,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.344461062999926 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.05579138340547003,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.923914750999984 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.05774040025797003,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.3188962239999 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.058285936940991045,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.156797204999975 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.16224267920478708,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.163606302000062 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.11587898028699842,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.629692784000099 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 12.279209141110798,
            "unit": "iter/sec",
            "range": "stddev: 0.026534529852077996",
            "extra": "mean: 81.43846957146447 msec\nrounds: 7"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.48482141665173956,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.062615152000035 sec\nrounds: 1"
          }
        ]
      },
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
          "id": "44d33fcc708fbe95a4e6a3c1221a5a35d5599f61",
          "message": "perf: use \"append\" instead of \"+=\" (#78)",
          "timestamp": "2022-08-19T20:28:51+08:00",
          "tree_id": "7df246282f2b53551f6aa394b3e361b33325669b",
          "url": "https://github.com/cnmetlab/cnmaps/commit/44d33fcc708fbe95a4e6a3c1221a5a35d5599f61"
        },
        "date": 1660913375198,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.2816937002631885,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.549955142999977 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.05956916015658624,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.78720998199998 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05989908940212886,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.694744611000033 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.05894568320988511,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.96477071000004 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.058304534812172557,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.151324562000013 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.05966872852753695,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.759197399999948 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.14208722621204165,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.037930338000024 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.11679773271213428,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.561810035000008 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 1.695381668101796,
            "unit": "iter/sec",
            "range": "stddev: 0.00013067191892414848",
            "extra": "mean: 589.8376860000099 msec\nrounds: 2"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.20209252909916262,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.94822843999998 sec\nrounds: 1"
          }
        ]
      },
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
          "id": "2f07d043af29d947cadb75c3c160f6448315838a",
          "message": "Merge branch '1.1' into main",
          "timestamp": "2022-08-19T20:56:48+08:00",
          "tree_id": "670e04271cace75138a9b890a3764840154250c2",
          "url": "https://github.com/cnmetlab/cnmaps/commit/2f07d043af29d947cadb75c3c160f6448315838a"
        },
        "date": 1660915334535,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.21560344516617352,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.638144808999982 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.05507650387616237,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.156562774000065 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05461213616726917,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.31094826499998 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.05517933525450069,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.122726477000015 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.05500426129618166,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.180409597999983 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.0552095594395939,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.112805285000036 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.18455276118438974,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.41850467900008 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.13111047150528343,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.627155851999987 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 10.738538492537135,
            "unit": "iter/sec",
            "range": "stddev: 0.03213807439861576",
            "extra": "mean: 93.1225418333194 msec\nrounds: 6"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.42945075906215885,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.3285556700000143 sec\nrounds: 1"
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
          "id": "2f07d043af29d947cadb75c3c160f6448315838a",
          "message": "1.1.* [skip ci]: update docs (#70)",
          "timestamp": "2022-08-16T10:22:02Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/80/commits/2f07d043af29d947cadb75c3c160f6448315838a"
        },
        "date": 1660915361653,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.22356115346910987,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.473049027000002 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.05417211823851088,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.459680597999977 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05461002707977451,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.31165544999999 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.056926519291593376,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.566505249999977 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.0549051854149447,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.213215973000047 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.056034684612219776,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.84608955900012 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.1936363947132457,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.164318419999972 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.13978657479975726,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.153762809 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 10.904783935804172,
            "unit": "iter/sec",
            "range": "stddev: 0.03270089612351467",
            "extra": "mean: 91.70287149997118 msec\nrounds: 6"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.4462376564165738,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.240958345000081 sec\nrounds: 1"
          }
        ]
      }
    ]
  }
}