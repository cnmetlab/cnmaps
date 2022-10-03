window.BENCHMARK_DATA = {
  "lastUpdate": 1664802359778,
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
          "id": "ec9335e9afa8f17a02b5cc28615dc5f2d4a36344",
          "message": "refactor: add ax to clips",
          "timestamp": "2022-08-16T10:22:02Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/82/commits/ec9335e9afa8f17a02b5cc28615dc5f2d4a36344"
        },
        "date": 1660980517209,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.28672203946295066,
            "unit": "iter/sec",
            "range": "stddev: 0.020781774509016315",
            "extra": "mean: 3.4876984059999927 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.07287082526932417,
            "unit": "iter/sec",
            "range": "stddev: 0.184351668459215",
            "extra": "mean: 13.72291306300001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.0711227730660601,
            "unit": "iter/sec",
            "range": "stddev: 0.2335851908531821",
            "extra": "mean: 14.060194180999975 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.07259243679091906,
            "unit": "iter/sec",
            "range": "stddev: 0.14448415646091525",
            "extra": "mean: 13.775539769800025 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.07344934205000807,
            "unit": "iter/sec",
            "range": "stddev: 0.06991940169420924",
            "extra": "mean: 13.614825839000014 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.07454622575145137,
            "unit": "iter/sec",
            "range": "stddev: 0.191547935642748",
            "extra": "mean: 13.414495367400013 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.24661299679346294,
            "unit": "iter/sec",
            "range": "stddev: 0.02105918376631924",
            "extra": "mean: 4.054936329399925 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.17287580480056677,
            "unit": "iter/sec",
            "range": "stddev: 0.012178514273106709",
            "extra": "mean: 5.784499462800023 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 14.574344464679417,
            "unit": "iter/sec",
            "range": "stddev: 0.019324861243500243",
            "extra": "mean: 68.61372066671517 msec\nrounds: 9"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.5802603865100658,
            "unit": "iter/sec",
            "range": "stddev: 0.03003318025402473",
            "extra": "mean: 1.7233642399999554 sec\nrounds: 5"
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
          "id": "69d19cdc0fabef9e287d8c7147ee15c858075ebf",
          "message": "Update README.md",
          "timestamp": "2022-08-22T23:48:09+08:00",
          "tree_id": "83f0ee1c517f526c057764660d122d98873c9210",
          "url": "https://github.com/cnmetlab/cnmaps/commit/69d19cdc0fabef9e287d8c7147ee15c858075ebf"
        },
        "date": 1661184683578,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.2568273758757637,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.8936659169999643 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.059720087989346464,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.74478443800001 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05994014940956527,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.683308431 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.05923802576365959,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.881048737000015 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.05998270244739365,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.671472927999957 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.060132651152787736,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.629900409000015 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.21848136611339894,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.577049374000012 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.15583518871501167,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.417035897000005 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 11.405307273829779,
            "unit": "iter/sec",
            "range": "stddev: 0.037931067429816875",
            "extra": "mean: 87.6784795000276 msec\nrounds: 6"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.4871281237781014,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.0528480109999236 sec\nrounds: 1"
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
          "id": "ef7ce829e0477a65c33bc59257fcbc8bb74a5c66",
          "message": "refactor: add ax to clips (#82)",
          "timestamp": "2022-08-31T12:12:52+08:00",
          "tree_id": "638ce7c4f947a67a608ae9a65fa290c7a2ed5794",
          "url": "https://github.com/cnmetlab/cnmaps/commit/ef7ce829e0477a65c33bc59257fcbc8bb74a5c66"
        },
        "date": 1661921942167,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.25511833105893333,
            "unit": "iter/sec",
            "range": "stddev: 0.0368328704400087",
            "extra": "mean: 3.9197496936000107 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.05954551045906243,
            "unit": "iter/sec",
            "range": "stddev: 0.13322948860685593",
            "extra": "mean: 16.793877360199986 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.059404058506684,
            "unit": "iter/sec",
            "range": "stddev: 0.24194059469370163",
            "extra": "mean: 16.833866660600005 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.060125665262840244,
            "unit": "iter/sec",
            "range": "stddev: 0.09415302507029817",
            "extra": "mean: 16.63183260640003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.061167488049985876,
            "unit": "iter/sec",
            "range": "stddev: 0.19031329646460104",
            "extra": "mean: 16.348554303600032 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.062073769563549895,
            "unit": "iter/sec",
            "range": "stddev: 0.15491645506693394",
            "extra": "mean: 16.109864231400024 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.22626004201787833,
            "unit": "iter/sec",
            "range": "stddev: 0.02803720507430326",
            "extra": "mean: 4.419693336399996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.16105856987650546,
            "unit": "iter/sec",
            "range": "stddev: 0.013393407922537258",
            "extra": "mean: 6.208921392799948 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 11.440944603131207,
            "unit": "iter/sec",
            "range": "stddev: 0.0396702878922633",
            "extra": "mean: 87.40537033334779 msec\nrounds: 6"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.504460772216621,
            "unit": "iter/sec",
            "range": "stddev: 0.05390530615908764",
            "extra": "mean: 1.9823146914000063 sec\nrounds: 5"
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
          "id": "035f5dab085c25f7ff8145d104717041eae6c504",
          "message": "fix: issue#85",
          "timestamp": "2022-09-27T10:22:44Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/86/commits/035f5dab085c25f7ff8145d104717041eae6c504"
        },
        "date": 1664288278207,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.24818714561086175,
            "unit": "iter/sec",
            "range": "stddev: 0.04107337389265492",
            "extra": "mean: 4.029217538800026 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.06289159446972796,
            "unit": "iter/sec",
            "range": "stddev: 0.13849186380395667",
            "extra": "mean: 15.900376010999958 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.06185405854673851,
            "unit": "iter/sec",
            "range": "stddev: 0.19031100676984977",
            "extra": "mean: 16.167087875800007 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.06228539280384481,
            "unit": "iter/sec",
            "range": "stddev: 0.08648860360124047",
            "extra": "mean: 16.055128738600025 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.06461045629343168,
            "unit": "iter/sec",
            "range": "stddev: 0.17061874476604252",
            "extra": "mean: 15.477370960800044 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.06492903137446825,
            "unit": "iter/sec",
            "range": "stddev: 0.09363401324976334",
            "extra": "mean: 15.40143105219995 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.2224414875320165,
            "unit": "iter/sec",
            "range": "stddev: 0.13002052997391408",
            "extra": "mean: 4.495564254199962 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.16119844600795602,
            "unit": "iter/sec",
            "range": "stddev: 0.0320652670337767",
            "extra": "mean: 6.2035337484000594 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 12.673376084735343,
            "unit": "iter/sec",
            "range": "stddev: 0.028832912952054344",
            "extra": "mean: 78.9055728571384 msec\nrounds: 7"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.5193857530305506,
            "unit": "iter/sec",
            "range": "stddev: 0.044885625226395526",
            "extra": "mean: 1.9253512329999922 sec\nrounds: 5"
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
          "id": "3243c4d5e2b3187c6658bb2af91c3f07ffee103a",
          "message": "fix: issue#85 (#86)",
          "timestamp": "2022-09-28T10:55:35+08:00",
          "tree_id": "8271dec5d09a8e4a2abc84802b46c4d856fefeb5",
          "url": "https://github.com/cnmetlab/cnmaps/commit/3243c4d5e2b3187c6658bb2af91c3f07ffee103a"
        },
        "date": 1664336368143,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.25895261597108343,
            "unit": "iter/sec",
            "range": "stddev: 0.03233401762350079",
            "extra": "mean: 3.8617103605999774 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.06386051937908153,
            "unit": "iter/sec",
            "range": "stddev: 0.08602988910954573",
            "extra": "mean: 15.65912726240001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.06253975007361895,
            "unit": "iter/sec",
            "range": "stddev: 0.052887215988858205",
            "extra": "mean: 15.989830448999964 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.06323265068427318,
            "unit": "iter/sec",
            "range": "stddev: 0.14569100486515754",
            "extra": "mean: 15.814614588799987 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.06612164044046985,
            "unit": "iter/sec",
            "range": "stddev: 0.054556114782756945",
            "extra": "mean: 15.123641720599972 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.06714293578730113,
            "unit": "iter/sec",
            "range": "stddev: 0.09226053498405898",
            "extra": "mean: 14.893599576399993 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.22924032039816122,
            "unit": "iter/sec",
            "range": "stddev: 0.03373493350061156",
            "extra": "mean: 4.3622343497999285 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.16231147240139832,
            "unit": "iter/sec",
            "range": "stddev: 0.01581441108632694",
            "extra": "mean: 6.160993953199977 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 12.806134322748424,
            "unit": "iter/sec",
            "range": "stddev: 0.029336376360296647",
            "extra": "mean: 78.0875770000031 msec\nrounds: 7"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.5243445656434942,
            "unit": "iter/sec",
            "range": "stddev: 0.04867017263416353",
            "extra": "mean: 1.9071428704000482 sec\nrounds: 5"
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
          "id": "e2cc0ec1423f5120bcbe423e8941411c88034bc2",
          "message": "1.1.1 ",
          "timestamp": "2022-09-27T10:22:44Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/87/commits/e2cc0ec1423f5120bcbe423e8941411c88034bc2"
        },
        "date": 1664802192231,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.2927848879067931,
            "unit": "iter/sec",
            "range": "stddev: 0.016514156585996382",
            "extra": "mean: 3.4154768271999956 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.07251889310239604,
            "unit": "iter/sec",
            "range": "stddev: 0.25566181984144515",
            "extra": "mean: 13.789509977600028 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.07087297540691959,
            "unit": "iter/sec",
            "range": "stddev: 0.18233769807755715",
            "extra": "mean: 14.109750497399977 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.07119862928339665,
            "unit": "iter/sec",
            "range": "stddev: 0.20033564447919328",
            "extra": "mean: 14.045214213600001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.07181645270623332,
            "unit": "iter/sec",
            "range": "stddev: 0.2229486654284922",
            "extra": "mean: 13.924385879800003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.07354627998905743,
            "unit": "iter/sec",
            "range": "stddev: 0.11438422642743856",
            "extra": "mean: 13.596880768800066 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.25084404381383263,
            "unit": "iter/sec",
            "range": "stddev: 0.0297034215159539",
            "extra": "mean: 3.9865407397999206 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.1746907870351293,
            "unit": "iter/sec",
            "range": "stddev: 0.029175718322400696",
            "extra": "mean: 5.7244003360000075 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 12.86011013005599,
            "unit": "iter/sec",
            "range": "stddev: 0.026369877468211147",
            "extra": "mean: 77.7598317500292 msec\nrounds: 8"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.5707775876524372,
            "unit": "iter/sec",
            "range": "stddev: 0.026402109734480383",
            "extra": "mean: 1.7519959116000337 sec\nrounds: 5"
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
          "id": "e2cc0ec1423f5120bcbe423e8941411c88034bc2",
          "message": "Merge branch 'main' into 1.1",
          "timestamp": "2022-10-03T20:27:34+08:00",
          "tree_id": "a18e12b6528718287cc3d5e1c974dcba266d7740",
          "url": "https://github.com/cnmetlab/cnmaps/commit/e2cc0ec1423f5120bcbe423e8941411c88034bc2"
        },
        "date": 1664802355449,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.2849739179063595,
            "unit": "iter/sec",
            "range": "stddev: 0.024135679281386643",
            "extra": "mean: 3.5090930684000115 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.07235616060330417,
            "unit": "iter/sec",
            "range": "stddev: 0.16077656240143703",
            "extra": "mean: 13.820523251400028 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.07243863475893368,
            "unit": "iter/sec",
            "range": "stddev: 0.05897598155885635",
            "extra": "mean: 13.804788057199994 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.07221407795389563,
            "unit": "iter/sec",
            "range": "stddev: 0.04899788001645804",
            "extra": "mean: 13.84771540859997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.07384660858420779,
            "unit": "iter/sec",
            "range": "stddev: 0.09003312561596684",
            "extra": "mean: 13.541583278800044 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.07421326042280454,
            "unit": "iter/sec",
            "range": "stddev: 0.0995756348163908",
            "extra": "mean: 13.474680863000003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.24395940371176422,
            "unit": "iter/sec",
            "range": "stddev: 0.03620459171501387",
            "extra": "mean: 4.099042647199985 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.17070806647156922,
            "unit": "iter/sec",
            "range": "stddev: 0.017573528953399902",
            "extra": "mean: 5.857953995200023 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 13.169632713510714,
            "unit": "iter/sec",
            "range": "stddev: 0.02360332885310333",
            "extra": "mean: 75.93226187501045 msec\nrounds: 8"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.5657488765988988,
            "unit": "iter/sec",
            "range": "stddev: 0.03245436072833668",
            "extra": "mean: 1.76756868880002 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}