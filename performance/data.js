window.BENCHMARK_DATA = {
  "lastUpdate": 1774786429887,
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
      },
      {
        "commit": {
          "author": {
            "email": "clarmylee92510@gmail.com",
            "name": "Wentao Li",
            "username": "Clarmy"
          },
          "committer": {
            "email": "clarmylee92510@gmail.com",
            "name": "Wentao Li",
            "username": "Clarmy"
          },
          "distinct": true,
          "id": "f638e04f80038c8802c5faa110690cd34d3ad57b",
          "message": "fix: issue#85 (#86)",
          "timestamp": "2022-10-10T15:49:51+08:00",
          "tree_id": "a18e12b6528718287cc3d5e1c974dcba266d7740",
          "url": "https://github.com/cnmetlab/cnmaps/commit/f638e04f80038c8802c5faa110690cd34d3ad57b"
        },
        "date": 1665390322380,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.28907446945768117,
            "unit": "iter/sec",
            "range": "stddev: 0.026917728006988672",
            "extra": "mean: 3.459316216600007 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.07125731943349382,
            "unit": "iter/sec",
            "range": "stddev: 0.3552251537398307",
            "extra": "mean: 14.033646058399995 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.0718309148245781,
            "unit": "iter/sec",
            "range": "stddev: 0.07552578216978849",
            "extra": "mean: 13.92158240560002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.07298493109085269,
            "unit": "iter/sec",
            "range": "stddev: 0.11170299701678406",
            "extra": "mean: 13.7014584388 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.07135657514071528,
            "unit": "iter/sec",
            "range": "stddev: 0.04637497525140344",
            "extra": "mean: 14.014125510199984 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.07262676194319435,
            "unit": "iter/sec",
            "range": "stddev: 0.12448352522310008",
            "extra": "mean: 13.769029118800017 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.2513149785965778,
            "unit": "iter/sec",
            "range": "stddev: 0.026391103291129515",
            "extra": "mean: 3.979070430200045 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.17507529876464026,
            "unit": "iter/sec",
            "range": "stddev: 0.024593555159265836",
            "extra": "mean: 5.7118280366000365 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 13.3723066089199,
            "unit": "iter/sec",
            "range": "stddev: 0.024721054546516817",
            "extra": "mean: 74.78141425002605 msec\nrounds: 8"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.5751227982529634,
            "unit": "iter/sec",
            "range": "stddev: 0.024926824023339067",
            "extra": "mean: 1.7387591015999988 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "clarmylee92510@gmail.com",
            "name": "Clarmy Lee",
            "username": "Clarmy"
          },
          "committer": {
            "email": "clarmylee92510@gmail.com",
            "name": "Clarmy Lee",
            "username": "Clarmy"
          },
          "distinct": true,
          "id": "3153c424c5875b8c854d219e775a5ef6eb06f3f6",
          "message": "chore: fix Shapely version limit",
          "timestamp": "2023-08-08T14:00:59+08:00",
          "tree_id": "8224d882dafdaf4287decd21972e5bb195913d23",
          "url": "https://github.com/cnmetlab/cnmaps/commit/3153c424c5875b8c854d219e775a5ef6eb06f3f6"
        },
        "date": 1691477629401,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.36416125242337666,
            "unit": "iter/sec",
            "range": "stddev: 0.034910296271447434",
            "extra": "mean: 2.74603625000002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.0652258496184016,
            "unit": "iter/sec",
            "range": "stddev: 0.04314068723501624",
            "extra": "mean: 15.33134494760002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.06645808862099678,
            "unit": "iter/sec",
            "range": "stddev: 0.07434309074830982",
            "extra": "mean: 15.047077349799974 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.06789009051598792,
            "unit": "iter/sec",
            "range": "stddev: 0.07232886293051027",
            "extra": "mean: 14.729690186000017 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.06801224164998645,
            "unit": "iter/sec",
            "range": "stddev: 0.18675330048368874",
            "extra": "mean: 14.70323541379994 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.06874039974618897,
            "unit": "iter/sec",
            "range": "stddev: 0.21924614343457113",
            "extra": "mean: 14.547485957200024 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.30378809296474313,
            "unit": "iter/sec",
            "range": "stddev: 0.03412866979119939",
            "extra": "mean: 3.2917682528000114 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.18055633547767372,
            "unit": "iter/sec",
            "range": "stddev: 0.04987200153024581",
            "extra": "mean: 5.5384376148000225 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 13.111158603122915,
            "unit": "iter/sec",
            "range": "stddev: 0.03755104777561241",
            "extra": "mean: 76.27091016668903 msec\nrounds: 6"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.5192367355404343,
            "unit": "iter/sec",
            "range": "stddev: 0.05352158218188377",
            "extra": "mean: 1.925903796000057 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "clarmylee92510@gmail.com",
            "name": "Clarmy Lee",
            "username": "Clarmy"
          },
          "committer": {
            "email": "clarmylee92510@gmail.com",
            "name": "Clarmy Lee",
            "username": "Clarmy"
          },
          "distinct": true,
          "id": "9686adcdffef4a0bdfa311614919a1ce60b933d0",
          "message": "Merge branch 'main' into 1.1",
          "timestamp": "2023-08-08T15:51:57+08:00",
          "tree_id": "8224d882dafdaf4287decd21972e5bb195913d23",
          "url": "https://github.com/cnmetlab/cnmaps/commit/9686adcdffef4a0bdfa311614919a1ce60b933d0"
        },
        "date": 1691483732118,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.4106606470758672,
            "unit": "iter/sec",
            "range": "stddev: 0.021410886237777895",
            "extra": "mean: 2.435100629000021 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.07552261923067395,
            "unit": "iter/sec",
            "range": "stddev: 0.2979545358461521",
            "extra": "mean: 13.241066189000026 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.07677807035242351,
            "unit": "iter/sec",
            "range": "stddev: 0.12275988782057326",
            "extra": "mean: 13.024552393799969 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.07889472057840465,
            "unit": "iter/sec",
            "range": "stddev: 0.04116793120735439",
            "extra": "mean: 12.67511935739999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.07897797258703172,
            "unit": "iter/sec",
            "range": "stddev: 0.1733540318095662",
            "extra": "mean: 12.66175830100001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.07952563679490116,
            "unit": "iter/sec",
            "range": "stddev: 0.29375164728053643",
            "extra": "mean: 12.57456136540004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.3293905070268106,
            "unit": "iter/sec",
            "range": "stddev: 0.018012168604600115",
            "extra": "mean: 3.035910199800037 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.18985969685202558,
            "unit": "iter/sec",
            "range": "stddev: 0.02242350784077735",
            "extra": "mean: 5.267047280599991 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 15.797733030052935,
            "unit": "iter/sec",
            "range": "stddev: 0.023837872717744176",
            "extra": "mean: 63.300221499986264 msec\nrounds: 8"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.57214727281946,
            "unit": "iter/sec",
            "range": "stddev: 0.028180763925247983",
            "extra": "mean: 1.747801741800049 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "clarmylee92510@gmail.com",
            "name": "Clarmy Lee",
            "username": "Clarmy"
          },
          "committer": {
            "email": "clarmylee92510@gmail.com",
            "name": "Clarmy Lee",
            "username": "Clarmy"
          },
          "distinct": true,
          "id": "6cea88d80bc6de43d891110f2942301ab2b15e5b",
          "message": "docs: remove dumped badge",
          "timestamp": "2023-08-08T15:54:40+08:00",
          "tree_id": "7596b8e32e669b2895e4bee2cc5dc0b3a995ae64",
          "url": "https://github.com/cnmetlab/cnmaps/commit/6cea88d80bc6de43d891110f2942301ab2b15e5b"
        },
        "date": 1691484608718,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.325296761998404,
            "unit": "iter/sec",
            "range": "stddev: 0.0259442293020304",
            "extra": "mean: 3.0741160590000165 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.06012028730153311,
            "unit": "iter/sec",
            "range": "stddev: 0.1346714937531259",
            "extra": "mean: 16.633320379600036 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.06120982207576133,
            "unit": "iter/sec",
            "range": "stddev: 0.40541206446755346",
            "extra": "mean: 16.337247292799976 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.0632326957810998,
            "unit": "iter/sec",
            "range": "stddev: 0.39635931601726465",
            "extra": "mean: 15.814603309999939 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.06890783186637137,
            "unit": "iter/sec",
            "range": "stddev: 0.36470563477456586",
            "extra": "mean: 14.512138503200003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.0649337414049499,
            "unit": "iter/sec",
            "range": "stddev: 0.15296674789711112",
            "extra": "mean: 15.400313894800002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.2655776263891603,
            "unit": "iter/sec",
            "range": "stddev: 0.08360560763941215",
            "extra": "mean: 3.765377428799911 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.1553460040185917,
            "unit": "iter/sec",
            "range": "stddev: 0.0751025507215751",
            "extra": "mean: 6.437243148400012 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 12.200706700712358,
            "unit": "iter/sec",
            "range": "stddev: 0.037919057151064625",
            "extra": "mean: 81.96246533339036 msec\nrounds: 6"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.4583045915476321,
            "unit": "iter/sec",
            "range": "stddev: 0.10514912363245163",
            "extra": "mean: 2.181955010799993 sec\nrounds: 5"
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
          "id": "2d4fe867277299e7b8250e7e9699e9d34774e807",
          "message": "tests: add test_issue97",
          "timestamp": "2023-07-18T03:53:17Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/100/commits/2d4fe867277299e7b8250e7e9699e9d34774e807"
        },
        "date": 1691484633904,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.2728278626687053,
            "unit": "iter/sec",
            "range": "stddev: 0.03857642373059175",
            "extra": "mean: 3.6653147894000084 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.05704472021866071,
            "unit": "iter/sec",
            "range": "stddev: 0.06841127352457477",
            "extra": "mean: 17.530106137199983 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.059309143040383365,
            "unit": "iter/sec",
            "range": "stddev: 0.10591398903207803",
            "extra": "mean: 16.860806761600042 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.06050209586526371,
            "unit": "iter/sec",
            "range": "stddev: 0.1335029032451066",
            "extra": "mean: 16.528353038000024 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.060962480054886206,
            "unit": "iter/sec",
            "range": "stddev: 0.060880676325233786",
            "extra": "mean: 16.403532125000037 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.061618972550513795,
            "unit": "iter/sec",
            "range": "stddev: 0.0771273018164942",
            "extra": "mean: 16.228767838999964 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.23076062020649857,
            "unit": "iter/sec",
            "range": "stddev: 0.07400965868742891",
            "extra": "mean: 4.333495026600031 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.13678351820020382,
            "unit": "iter/sec",
            "range": "stddev: 0.062413273493382555",
            "extra": "mean: 7.3108223356000055 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 11.94155266754166,
            "unit": "iter/sec",
            "range": "stddev: 0.036657364771132545",
            "extra": "mean: 83.74120416669939 msec\nrounds: 6"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.440266944383097,
            "unit": "iter/sec",
            "range": "stddev: 0.060431538780460425",
            "extra": "mean: 2.271349263799948 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "clarmylee92510@gmail.com",
            "name": "Clarmy Lee",
            "username": "Clarmy"
          },
          "committer": {
            "email": "clarmylee92510@gmail.com",
            "name": "Clarmy Lee",
            "username": "Clarmy"
          },
          "distinct": true,
          "id": "14f61d0aaa157bc3fe9645a4fcf9f9cdb8ef02ce",
          "message": "Merge branch 'main' into 1.1",
          "timestamp": "2023-08-09T10:53:38+08:00",
          "tree_id": "de097de51293f4f1a55bff1cab9c6309ffb57d4d",
          "url": "https://github.com/cnmetlab/cnmaps/commit/14f61d0aaa157bc3fe9645a4fcf9f9cdb8ef02ce"
        },
        "date": 1691552386196,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.4033991410115189,
            "unit": "iter/sec",
            "range": "stddev: 0.021381199197873745",
            "extra": "mean: 2.478934381199997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.07324745211019146,
            "unit": "iter/sec",
            "range": "stddev: 0.14649001697045988",
            "extra": "mean: 13.652352009399966 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.0742250129537361,
            "unit": "iter/sec",
            "range": "stddev: 0.069205193176322",
            "extra": "mean: 13.472547328799966 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.07417137410338077,
            "unit": "iter/sec",
            "range": "stddev: 0.05927788487232609",
            "extra": "mean: 13.4822903322 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.07376814445375895,
            "unit": "iter/sec",
            "range": "stddev: 0.0946629821402136",
            "extra": "mean: 13.555986901999995 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.07416645487522018,
            "unit": "iter/sec",
            "range": "stddev: 0.056823415904132514",
            "extra": "mean: 13.483184570199956 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.31866315174897425,
            "unit": "iter/sec",
            "range": "stddev: 0.02487586375607391",
            "extra": "mean: 3.13810992739991 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.18541238311242217,
            "unit": "iter/sec",
            "range": "stddev: 0.03718088643318257",
            "extra": "mean: 5.3933830266000315 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 14.93474205782367,
            "unit": "iter/sec",
            "range": "stddev: 0.026658560292036265",
            "extra": "mean: 66.95796928586007 msec\nrounds: 7"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.543580488506949,
            "unit": "iter/sec",
            "range": "stddev: 0.05361405305837394",
            "extra": "mean: 1.8396539631999986 sec\nrounds: 5"
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
          "id": "992aab507b73e059e3bbb151edd106df23f9804a",
          "message": "tests: add test_issue97 (#100)",
          "timestamp": "2023-08-09T10:44:24+08:00",
          "tree_id": "bda9d3c912720333f725dc1a057d60d00390060c",
          "url": "https://github.com/cnmetlab/cnmaps/commit/992aab507b73e059e3bbb151edd106df23f9804a"
        },
        "date": 1691552667477,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.3147628740139848,
            "unit": "iter/sec",
            "range": "stddev: 0.038573676615974384",
            "extra": "mean: 3.176994755599958 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.05673402314976539,
            "unit": "iter/sec",
            "range": "stddev: 0.0675559734432289",
            "extra": "mean: 17.62610765959994 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.0573035762322897,
            "unit": "iter/sec",
            "range": "stddev: 0.02160112414285506",
            "extra": "mean: 17.45091782660006 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.0583191296212523,
            "unit": "iter/sec",
            "range": "stddev: 0.07448653058924223",
            "extra": "mean: 17.14703231159997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.05825549927973658,
            "unit": "iter/sec",
            "range": "stddev: 0.03613417761420591",
            "extra": "mean: 17.165761385000042 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.057994734961997634,
            "unit": "iter/sec",
            "range": "stddev: 0.10353394742615303",
            "extra": "mean: 17.24294456480011 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.25192747188201986,
            "unit": "iter/sec",
            "range": "stddev: 0.035928611985778805",
            "extra": "mean: 3.969396400200094 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.14832492708320383,
            "unit": "iter/sec",
            "range": "stddev: 0.04529125898819434",
            "extra": "mean: 6.741955109400078 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 12.036792140328632,
            "unit": "iter/sec",
            "range": "stddev: 0.036016685646505855",
            "extra": "mean: 83.07861333332767 msec\nrounds: 6"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.4466545765705581,
            "unit": "iter/sec",
            "range": "stddev: 0.0644320983945911",
            "extra": "mean: 2.238866570400023 sec\nrounds: 5"
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
          "id": "14f61d0aaa157bc3fe9645a4fcf9f9cdb8ef02ce",
          "message": "1.1.* [skip ci]: update docs (#70) (#80)",
          "timestamp": "2023-07-18T03:53:17Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/101/commits/14f61d0aaa157bc3fe9645a4fcf9f9cdb8ef02ce"
        },
        "date": 1691568640699,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.3975549237725297,
            "unit": "iter/sec",
            "range": "stddev: 0.030806862457737564",
            "extra": "mean: 2.515375713399976 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.06943121312138113,
            "unit": "iter/sec",
            "range": "stddev: 0.08506619224135324",
            "extra": "mean: 14.402744170000005 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.07051299917829627,
            "unit": "iter/sec",
            "range": "stddev: 0.12301019173558138",
            "extra": "mean: 14.18178224799999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.07234417320784232,
            "unit": "iter/sec",
            "range": "stddev: 0.15729519413928467",
            "extra": "mean: 13.822813305600084 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.07373411720384594,
            "unit": "iter/sec",
            "range": "stddev: 0.27485118876221726",
            "extra": "mean: 13.56224279779999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.07497784617057937,
            "unit": "iter/sec",
            "range": "stddev: 0.06094569808413225",
            "extra": "mean: 13.337272955599929 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.31682090070786384,
            "unit": "iter/sec",
            "range": "stddev: 0.029298961685857196",
            "extra": "mean: 3.1563574176000655 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.18576767876594388,
            "unit": "iter/sec",
            "range": "stddev: 0.035416553516624726",
            "extra": "mean: 5.38306774699995 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 14.688012688357977,
            "unit": "iter/sec",
            "range": "stddev: 0.02895358751364499",
            "extra": "mean: 68.08272985715901 msec\nrounds: 7"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.5257691358468961,
            "unit": "iter/sec",
            "range": "stddev: 0.03373969976768873",
            "extra": "mean: 1.9019754714000556 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "clarmylee92510@gmail.com",
            "name": "Clarmy Lee",
            "username": "Clarmy"
          },
          "committer": {
            "email": "clarmylee92510@gmail.com",
            "name": "Clarmy Lee",
            "username": "Clarmy"
          },
          "distinct": true,
          "id": "d7a5a93712bb8079db9a24f9565280453150ba4b",
          "message": "fix: NumbaDeprecationWarning",
          "timestamp": "2023-08-09T19:04:44+08:00",
          "tree_id": "c50a7177b2b6777288c627e8b445546eab162312",
          "url": "https://github.com/cnmetlab/cnmaps/commit/d7a5a93712bb8079db9a24f9565280453150ba4b"
        },
        "date": 1691582060354,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.3615978496577765,
            "unit": "iter/sec",
            "range": "stddev: 0.032416908906321915",
            "extra": "mean: 2.7655031713999962 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.0644002494479107,
            "unit": "iter/sec",
            "range": "stddev: 0.5030813970229542",
            "extra": "mean: 15.527890164600013 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.06699524620498304,
            "unit": "iter/sec",
            "range": "stddev: 0.05670819984695309",
            "extra": "mean: 14.926432196999986 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.07014144399978385,
            "unit": "iter/sec",
            "range": "stddev: 0.0978593230942594",
            "extra": "mean: 14.256906373400033 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.06871483374022073,
            "unit": "iter/sec",
            "range": "stddev: 0.16171480924457404",
            "extra": "mean: 14.55289848739999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.06918998595910622,
            "unit": "iter/sec",
            "range": "stddev: 0.22518427464381352",
            "extra": "mean: 14.4529585624 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.30385008891281046,
            "unit": "iter/sec",
            "range": "stddev: 0.031298338311646044",
            "extra": "mean: 3.2910966180001653 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.1787392396748369,
            "unit": "iter/sec",
            "range": "stddev: 0.040346416971437205",
            "extra": "mean: 5.5947423846000675 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 13.061971997128383,
            "unit": "iter/sec",
            "range": "stddev: 0.03703953521710461",
            "extra": "mean: 76.55811850001253 msec\nrounds: 6"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.5216451405948052,
            "unit": "iter/sec",
            "range": "stddev: 0.0587747418820227",
            "extra": "mean: 1.9170120109999516 sec\nrounds: 5"
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
          "id": "cb3de49ad7a366804179721d0625709e54964feb",
          "message": "fix: NumbaDeprecationWarning (#102)",
          "timestamp": "2023-08-09T20:53:41+08:00",
          "tree_id": "c50a7177b2b6777288c627e8b445546eab162312",
          "url": "https://github.com/cnmetlab/cnmaps/commit/cb3de49ad7a366804179721d0625709e54964feb"
        },
        "date": 1691589091845,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.2811258814316201,
            "unit": "iter/sec",
            "range": "stddev: 0.07012884100688896",
            "extra": "mean: 3.557125352200046 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.05683934224431261,
            "unit": "iter/sec",
            "range": "stddev: 0.3190674152066201",
            "extra": "mean: 17.593447786599974 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.060234533826193,
            "unit": "iter/sec",
            "range": "stddev: 0.37599773872784825",
            "extra": "mean: 16.601772047999976 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.05866370922471612,
            "unit": "iter/sec",
            "range": "stddev: 0.18489439459858237",
            "extra": "mean: 17.046313866199945 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.061650119311774304,
            "unit": "iter/sec",
            "range": "stddev: 0.3498442432848622",
            "extra": "mean: 16.220568770399996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.06394290667222247,
            "unit": "iter/sec",
            "range": "stddev: 0.1331184328197821",
            "extra": "mean: 15.63895124640012 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.2325355598994,
            "unit": "iter/sec",
            "range": "stddev: 0.09865596992994212",
            "extra": "mean: 4.300417537999874 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.1391437006994757,
            "unit": "iter/sec",
            "range": "stddev: 0.16273328714142993",
            "extra": "mean: 7.186814745999982 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 11.326012764976186,
            "unit": "iter/sec",
            "range": "stddev: 0.039327766590065365",
            "extra": "mean: 88.29232500005067 msec\nrounds: 15"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.4704461134125629,
            "unit": "iter/sec",
            "range": "stddev: 0.09954689400535752",
            "extra": "mean: 2.1256419629999983 sec\nrounds: 5"
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
          "id": "d7a5a93712bb8079db9a24f9565280453150ba4b",
          "message": "fix: NumbaDeprecationWarning",
          "timestamp": "2023-07-18T03:53:17Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/102/commits/d7a5a93712bb8079db9a24f9565280453150ba4b"
        },
        "date": 1691590744293,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.3996366477063221,
            "unit": "iter/sec",
            "range": "stddev: 0.03627485422497012",
            "extra": "mean: 2.5022730165999745 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.0734109018081216,
            "unit": "iter/sec",
            "range": "stddev: 0.028972911583598344",
            "extra": "mean: 13.621954987200116 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.07283931229912129,
            "unit": "iter/sec",
            "range": "stddev: 0.09150228976024954",
            "extra": "mean: 13.728850100800083 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.0745053893015363,
            "unit": "iter/sec",
            "range": "stddev: 0.2105983947333531",
            "extra": "mean: 13.421847860600064 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.0758301504012792,
            "unit": "iter/sec",
            "range": "stddev: 0.14019647096763876",
            "extra": "mean: 13.18736669660002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.07617888836989845,
            "unit": "iter/sec",
            "range": "stddev: 0.20194337051502415",
            "extra": "mean: 13.12699648680018 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.32039027275330506,
            "unit": "iter/sec",
            "range": "stddev: 0.02806884911496465",
            "extra": "mean: 3.1211933851998763 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.20328370927043313,
            "unit": "iter/sec",
            "range": "stddev: 0.026578313093041105",
            "extra": "mean: 4.919233339399943 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 13.921936020085711,
            "unit": "iter/sec",
            "range": "stddev: 0.028806725638992045",
            "extra": "mean: 71.8290903332167 msec\nrounds: 18"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.5497920195947708,
            "unit": "iter/sec",
            "range": "stddev: 0.040773297823971794",
            "extra": "mean: 1.8188696167999296 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "clarmylee92510@gmail.com",
            "name": "Clarmy",
            "username": "Clarmy"
          },
          "committer": {
            "email": "clarmylee92510@gmail.com",
            "name": "Clarmy",
            "username": "Clarmy"
          },
          "distinct": true,
          "id": "39fa3403a7ee0cea2275472156feb7dbe17ad427",
          "message": "fix: dependences",
          "timestamp": "2023-08-10T01:20:36+08:00",
          "tree_id": "64a501cf02266202ce2792ca43324a3996b9133c",
          "url": "https://github.com/cnmetlab/cnmaps/commit/39fa3403a7ee0cea2275472156feb7dbe17ad427"
        },
        "date": 1691605870091,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.23322171741214018,
            "unit": "iter/sec",
            "range": "stddev: 0.05892462210694676",
            "extra": "mean: 4.287765355199918 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.04549291456041252,
            "unit": "iter/sec",
            "range": "stddev: 0.20327974724968167",
            "extra": "mean: 21.98144501540005 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.04698201524864042,
            "unit": "iter/sec",
            "range": "stddev: 0.09486308394793543",
            "extra": "mean: 21.284740441799975 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.045744314419863395,
            "unit": "iter/sec",
            "range": "stddev: 0.3229095455065087",
            "extra": "mean: 21.860640227800058 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.0468154012797552,
            "unit": "iter/sec",
            "range": "stddev: 0.3492058973245769",
            "extra": "mean: 21.360491903600085 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.04872275940252428,
            "unit": "iter/sec",
            "range": "stddev: 0.1532322282012348",
            "extra": "mean: 20.52428910560002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.19919717837684178,
            "unit": "iter/sec",
            "range": "stddev: 0.0890018770678412",
            "extra": "mean: 5.020151430600071 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.11868134655782125,
            "unit": "iter/sec",
            "range": "stddev: 0.15453108356775902",
            "extra": "mean: 8.425923946799866 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 9.143497317242486,
            "unit": "iter/sec",
            "range": "stddev: 0.05434070820124534",
            "extra": "mean: 109.36734220003927 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.40395604456941203,
            "unit": "iter/sec",
            "range": "stddev: 0.09647774370971811",
            "extra": "mean: 2.475516862400036 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "clarmylee92510@gmail.com",
            "name": "Clarmy Lee",
            "username": "Clarmy"
          },
          "committer": {
            "email": "clarmylee92510@gmail.com",
            "name": "Clarmy Lee",
            "username": "Clarmy"
          },
          "distinct": true,
          "id": "be28f0d144329d927a40a27ba133ddb7c1f7af95",
          "message": "fix: dependeces conflict.",
          "timestamp": "2023-08-10T12:16:58+08:00",
          "tree_id": "2377ad5d57d741d345e436f857717acb829752ce",
          "url": "https://github.com/cnmetlab/cnmaps/commit/be28f0d144329d927a40a27ba133ddb7c1f7af95"
        },
        "date": 1691644385193,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.3217123992284392,
            "unit": "iter/sec",
            "range": "stddev: 0.04710456528732015",
            "extra": "mean: 3.108366362000015 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.06022466989248514,
            "unit": "iter/sec",
            "range": "stddev: 0.06783690361248383",
            "extra": "mean: 16.604491179199975 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.06099206960187084,
            "unit": "iter/sec",
            "range": "stddev: 0.2593183770483316",
            "extra": "mean: 16.395574154600034 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.06331909205081497,
            "unit": "iter/sec",
            "range": "stddev: 0.10560889867980619",
            "extra": "mean: 15.793024941000066 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.06398923050316144,
            "unit": "iter/sec",
            "range": "stddev: 0.11658152450004",
            "extra": "mean: 15.62762971420002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.06555822606035168,
            "unit": "iter/sec",
            "range": "stddev: 0.19960213624546547",
            "extra": "mean: 15.253615909000018 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.288219836885088,
            "unit": "iter/sec",
            "range": "stddev: 0.058636653546118064",
            "extra": "mean: 3.469573818399931 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.14634880058961888,
            "unit": "iter/sec",
            "range": "stddev: 0.1105848127859241",
            "extra": "mean: 6.832990745200095 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 12.8091436718948,
            "unit": "iter/sec",
            "range": "stddev: 0.03670145870568215",
            "extra": "mean: 78.06923129405999 msec\nrounds: 17"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.5210630661312051,
            "unit": "iter/sec",
            "range": "stddev: 0.06006353935152076",
            "extra": "mean: 1.919153486400046 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "clarmylee92510@gmail.com",
            "name": "Clarmy Lee",
            "username": "Clarmy"
          },
          "committer": {
            "email": "clarmylee92510@gmail.com",
            "name": "Clarmy Lee",
            "username": "Clarmy"
          },
          "distinct": true,
          "id": "7f5b42cdcf876894a17e659516b8a92cad1ed6d1",
          "message": "chore: update meta",
          "timestamp": "2023-08-10T12:48:44+08:00",
          "tree_id": "502a253d1956691761b6d2330912f705f878718c",
          "url": "https://github.com/cnmetlab/cnmaps/commit/7f5b42cdcf876894a17e659516b8a92cad1ed6d1"
        },
        "date": 1691646173091,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.34856442149718003,
            "unit": "iter/sec",
            "range": "stddev: 0.04528029526458785",
            "extra": "mean: 2.868910130600034 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.05839549021430175,
            "unit": "iter/sec",
            "range": "stddev: 0.24694289237628939",
            "extra": "mean: 17.124610073999996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.061995154052963464,
            "unit": "iter/sec",
            "range": "stddev: 0.10450949469538567",
            "extra": "mean: 16.130293008800074 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.06340438486928118,
            "unit": "iter/sec",
            "range": "stddev: 0.21867163907957754",
            "extra": "mean: 15.771779855000068 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.06335998484622186,
            "unit": "iter/sec",
            "range": "stddev: 0.27009920746402805",
            "extra": "mean: 15.78283205759999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.06493493759680882,
            "unit": "iter/sec",
            "range": "stddev: 0.2067324059851478",
            "extra": "mean: 15.400030199600042 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.2969097382602891,
            "unit": "iter/sec",
            "range": "stddev: 0.04419455820605759",
            "extra": "mean: 3.368026949400155 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.15353502628800209,
            "unit": "iter/sec",
            "range": "stddev: 0.050821282294341796",
            "extra": "mean: 6.513171777000207 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 12.459845836513615,
            "unit": "iter/sec",
            "range": "stddev: 0.04438920453119619",
            "extra": "mean: 80.25781483343053 msec\nrounds: 6"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.5101860224530678,
            "unit": "iter/sec",
            "range": "stddev: 0.05728983707550664",
            "extra": "mean: 1.9600693786000192 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "clarmylee92510@gmail.com",
            "name": "Clarmy Lee",
            "username": "Clarmy"
          },
          "committer": {
            "email": "clarmylee92510@gmail.com",
            "name": "Clarmy Lee",
            "username": "Clarmy"
          },
          "distinct": true,
          "id": "2aa362af223dfff100da386e275fb031656bd8e2",
          "message": "fix: version",
          "timestamp": "2023-08-10T12:52:38+08:00",
          "tree_id": "d96c4dde8f748ef3f66e69bbb6a96542e8c3ca5a",
          "url": "https://github.com/cnmetlab/cnmaps/commit/2aa362af223dfff100da386e275fb031656bd8e2"
        },
        "date": 1691646719835,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.30810268009898284,
            "unit": "iter/sec",
            "range": "stddev: 0.08532038654527133",
            "extra": "mean: 3.2456712147999953 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.05795962423447121,
            "unit": "iter/sec",
            "range": "stddev: 0.20185618067486177",
            "extra": "mean: 17.253389979800023 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05874837455834421,
            "unit": "iter/sec",
            "range": "stddev: 0.18107008755410398",
            "extra": "mean: 17.021747538000046 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.05881589518053312,
            "unit": "iter/sec",
            "range": "stddev: 0.09999120954721567",
            "extra": "mean: 17.00220657920004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.05907180420602885,
            "unit": "iter/sec",
            "range": "stddev: 0.17423728739317584",
            "extra": "mean: 16.92855015080004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.0585139303743238,
            "unit": "iter/sec",
            "range": "stddev: 0.4042017088573469",
            "extra": "mean: 17.08994753220004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.26080656888748066,
            "unit": "iter/sec",
            "range": "stddev: 0.07543917482428032",
            "extra": "mean: 3.834259252999982 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.13327719314475253,
            "unit": "iter/sec",
            "range": "stddev: 0.09746434762511036",
            "extra": "mean: 7.503159215799951 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 11.15344827889333,
            "unit": "iter/sec",
            "range": "stddev: 0.04032663928049597",
            "extra": "mean: 89.65837066662061 msec\nrounds: 15"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.4539134179508422,
            "unit": "iter/sec",
            "range": "stddev: 0.03753884788304392",
            "extra": "mean: 2.203063316599946 sec\nrounds: 5"
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
          "id": "ce550698ba393d453a49cabbb8a7dbefb20d20fc",
          "message": "chore: bump version and change some dependencies.",
          "timestamp": "2023-07-18T03:53:17Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/103/commits/ce550698ba393d453a49cabbb8a7dbefb20d20fc"
        },
        "date": 1691650274675,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.35393262167438155,
            "unit": "iter/sec",
            "range": "stddev: 0.05268629754601634",
            "extra": "mean: 2.825396526799955 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.06003690817968486,
            "unit": "iter/sec",
            "range": "stddev: 0.12877160404504365",
            "extra": "mean: 16.65642069720002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.060803432612200045,
            "unit": "iter/sec",
            "range": "stddev: 0.08843838509731716",
            "extra": "mean: 16.446439897200026 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.06116197974597539,
            "unit": "iter/sec",
            "range": "stddev: 0.06766236660858216",
            "extra": "mean: 16.350026669399995 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.06344039585734614,
            "unit": "iter/sec",
            "range": "stddev: 0.10614312658325961",
            "extra": "mean: 15.762827241000014 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.06352306654863007,
            "unit": "iter/sec",
            "range": "stddev: 0.08061179260120824",
            "extra": "mean: 15.742313057800038 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.2967201196926261,
            "unit": "iter/sec",
            "range": "stddev: 0.04760242255062613",
            "extra": "mean: 3.3701792822000245 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.15565864375013994,
            "unit": "iter/sec",
            "range": "stddev: 0.05617567984435332",
            "extra": "mean: 6.424313972600066 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 11.328587508117128,
            "unit": "iter/sec",
            "range": "stddev: 0.04747842160620453",
            "extra": "mean: 88.27225806248862 msec\nrounds: 16"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.5035019384556052,
            "unit": "iter/sec",
            "range": "stddev: 0.08799746031117658",
            "extra": "mean: 1.9860896723998849 sec\nrounds: 5"
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
          "id": "29ff2091f563b253eda54e6ec2ac42ad1579869d",
          "message": "chore: bump version and change some dependencies.",
          "timestamp": "2023-07-18T03:53:17Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/103/commits/29ff2091f563b253eda54e6ec2ac42ad1579869d"
        },
        "date": 1691650825160,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.40188263353597103,
            "unit": "iter/sec",
            "range": "stddev: 0.025186235642162973",
            "extra": "mean: 2.4882886608000034 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.07120810669398188,
            "unit": "iter/sec",
            "range": "stddev: 0.17794030216408974",
            "extra": "mean: 14.043344872199986 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.07192281121815407,
            "unit": "iter/sec",
            "range": "stddev: 0.09905744568477867",
            "extra": "mean: 13.903794680200008 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.07278016498119516,
            "unit": "iter/sec",
            "range": "stddev: 0.41466901262474526",
            "extra": "mean: 13.740007325600027 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.07434385379747697,
            "unit": "iter/sec",
            "range": "stddev: 0.14681056780691296",
            "extra": "mean: 13.451011064400017 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.07484296527797603,
            "unit": "iter/sec",
            "range": "stddev: 0.09139802358514096",
            "extra": "mean: 13.361309192999988 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.31872364225995303,
            "unit": "iter/sec",
            "range": "stddev: 0.026705811999713197",
            "extra": "mean: 3.13751434600008 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.16113171622982544,
            "unit": "iter/sec",
            "range": "stddev: 0.04524088005858013",
            "extra": "mean: 6.206102829400015 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 12.946114673561134,
            "unit": "iter/sec",
            "range": "stddev: 0.03292703595065197",
            "extra": "mean: 77.24325214283974 msec\nrounds: 7"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.5453680352699949,
            "unit": "iter/sec",
            "range": "stddev: 0.04594891436543993",
            "extra": "mean: 1.8336241497999253 sec\nrounds: 5"
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
          "id": "e701bab18c1f61de6307319ef5fbc3652dbe3724",
          "message": "chore: bump version and change some dependencies.",
          "timestamp": "2023-07-18T03:53:17Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/103/commits/e701bab18c1f61de6307319ef5fbc3652dbe3724"
        },
        "date": 1691650964467,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.37183340796667286,
            "unit": "iter/sec",
            "range": "stddev: 0.030159744226506024",
            "extra": "mean: 2.6893764211999724 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.06540417896540304,
            "unit": "iter/sec",
            "range": "stddev: 0.0640426916141681",
            "extra": "mean: 15.289542898000013 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.06710211044152022,
            "unit": "iter/sec",
            "range": "stddev: 0.055467893536168565",
            "extra": "mean: 14.902660935999984 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.06773430826388074,
            "unit": "iter/sec",
            "range": "stddev: 0.3575628944494088",
            "extra": "mean: 14.763567025799967 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.0696830172547379,
            "unit": "iter/sec",
            "range": "stddev: 0.070164787785423",
            "extra": "mean: 14.350698913399992 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.07058470765112629,
            "unit": "iter/sec",
            "range": "stddev: 0.05072654208830172",
            "extra": "mean: 14.167374680399963 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.30060489448352834,
            "unit": "iter/sec",
            "range": "stddev: 0.03536232362966057",
            "extra": "mean: 3.326625807999926 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.15570239644767478,
            "unit": "iter/sec",
            "range": "stddev: 0.05426333101287619",
            "extra": "mean: 6.422508726999967 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 12.451644786517265,
            "unit": "iter/sec",
            "range": "stddev: 0.03961269523134079",
            "extra": "mean: 80.31067518749069 msec\nrounds: 16"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.5212442171185628,
            "unit": "iter/sec",
            "range": "stddev: 0.06040253930245427",
            "extra": "mean: 1.9184865120000723 sec\nrounds: 5"
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
          "id": "c7a8159dae0f24b770d353694dbc4e98c7546709",
          "message": "chore: bump version and change some dependencies.",
          "timestamp": "2023-07-18T03:53:17Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/103/commits/c7a8159dae0f24b770d353694dbc4e98c7546709"
        },
        "date": 1691651005337,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.2350220815452648,
            "unit": "iter/sec",
            "range": "stddev: 0.04923656826179457",
            "extra": "mean: 4.254919339600019 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.04580534190490543,
            "unit": "iter/sec",
            "range": "stddev: 0.3056801618746282",
            "extra": "mean: 21.831514806200083 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.04597311702505915,
            "unit": "iter/sec",
            "range": "stddev: 0.25247372162331666",
            "extra": "mean: 21.75184248339997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.046678638963380314,
            "unit": "iter/sec",
            "range": "stddev: 0.3580591266160481",
            "extra": "mean: 21.423075355399853 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.04677234428400358,
            "unit": "iter/sec",
            "range": "stddev: 0.15890275678161858",
            "extra": "mean: 21.380155630599983 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.0479395520765636,
            "unit": "iter/sec",
            "range": "stddev: 0.181877624517337",
            "extra": "mean: 20.85960249279997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.19421585085152968,
            "unit": "iter/sec",
            "range": "stddev: 0.10516066578561661",
            "extra": "mean: 5.1489103263999825 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.09848776251793538,
            "unit": "iter/sec",
            "range": "stddev: 0.07557074026213284",
            "extra": "mean: 10.15354572419992 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 9.03087353614103,
            "unit": "iter/sec",
            "range": "stddev: 0.04987763671119054",
            "extra": "mean: 110.7312593846053 msec\nrounds: 13"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.3901222129911059,
            "unit": "iter/sec",
            "range": "stddev: 0.03873950903612497",
            "extra": "mean: 2.563299311600076 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "clarmylee92510@gmail.com",
            "name": "Clarmy Lee",
            "username": "Clarmy"
          },
          "committer": {
            "email": "clarmylee92510@gmail.com",
            "name": "Clarmy Lee",
            "username": "Clarmy"
          },
          "distinct": true,
          "id": "c78e3d975e9c8c94b7677f18c494609006912f65",
          "message": "chore",
          "timestamp": "2023-08-10T15:01:42+08:00",
          "tree_id": "405e7ec8618e7758bbda5b0b097d496171ef79f6",
          "url": "https://github.com/cnmetlab/cnmaps/commit/c78e3d975e9c8c94b7677f18c494609006912f65"
        },
        "date": 1691654796718,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.2571052805449795,
            "unit": "iter/sec",
            "range": "stddev: 0.03386038208642216",
            "extra": "mean: 3.889457259999972 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.051694523626716206,
            "unit": "iter/sec",
            "range": "stddev: 0.42252246432201923",
            "extra": "mean: 19.344408843400014 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.051627405268285784,
            "unit": "iter/sec",
            "range": "stddev: 0.15613857970024075",
            "extra": "mean: 19.36955759839998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.05128556954523678,
            "unit": "iter/sec",
            "range": "stddev: 0.3566763351906192",
            "extra": "mean: 19.498662272200043 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.05294618797179175,
            "unit": "iter/sec",
            "range": "stddev: 0.10174848509342306",
            "extra": "mean: 18.887101003999987 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.05374730673303431,
            "unit": "iter/sec",
            "range": "stddev: 0.33960290236095314",
            "extra": "mean: 18.60558343820003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.21668577017604582,
            "unit": "iter/sec",
            "range": "stddev: 0.040155481677776675",
            "extra": "mean: 4.614977712599921 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.10604633540557114,
            "unit": "iter/sec",
            "range": "stddev: 0.0890950430149661",
            "extra": "mean: 9.429840231400068 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 10.279159044462762,
            "unit": "iter/sec",
            "range": "stddev: 0.04438579761137826",
            "extra": "mean: 97.2842229285951 msec\nrounds: 14"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.44595309536231126,
            "unit": "iter/sec",
            "range": "stddev: 0.10159033479270234",
            "extra": "mean: 2.2423882924000282 sec\nrounds: 5"
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
          "id": "efc9de7bcb1e769fb498e75369ed6edbfb77c826",
          "message": "docs: update",
          "timestamp": "2023-07-18T03:53:17Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/104/commits/efc9de7bcb1e769fb498e75369ed6edbfb77c826"
        },
        "date": 1691656455798,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.4021267380059037,
            "unit": "iter/sec",
            "range": "stddev: 0.025757679629036797",
            "extra": "mean: 2.4867781858000173 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.07360625157788382,
            "unit": "iter/sec",
            "range": "stddev: 0.3459809612258598",
            "extra": "mean: 13.585802544799957 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.06997941417084859,
            "unit": "iter/sec",
            "range": "stddev: 0.760493648301436",
            "extra": "mean: 14.289916711200068 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.07626424525323984,
            "unit": "iter/sec",
            "range": "stddev: 0.08584665314162596",
            "extra": "mean: 13.112304418400026 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.07621679928835919,
            "unit": "iter/sec",
            "range": "stddev: 0.3015251732700313",
            "extra": "mean: 13.120467001199994 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.07305526256387422,
            "unit": "iter/sec",
            "range": "stddev: 0.6747806480060292",
            "extra": "mean: 13.688267824999912 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.31857314988559216,
            "unit": "iter/sec",
            "range": "stddev: 0.03130269797974903",
            "extra": "mean: 3.138996492200067 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.16046204707044626,
            "unit": "iter/sec",
            "range": "stddev: 0.04101831521922586",
            "extra": "mean: 6.232003257199994 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 14.51081764000785,
            "unit": "iter/sec",
            "range": "stddev: 0.027642636052718557",
            "extra": "mean: 68.91410427782476 msec\nrounds: 18"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.5541594372407445,
            "unit": "iter/sec",
            "range": "stddev: 0.030716621029632105",
            "extra": "mean: 1.8045348193999415 sec\nrounds: 5"
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
          "id": "6869938bbab80b36295a1ec9c6fa2fe42e54a61a",
          "message": "docs: update (#104)",
          "timestamp": "2023-08-10T16:04:43+08:00",
          "tree_id": "7f8405bf182d94c336ebfe9bf3b803ea13d69791",
          "url": "https://github.com/cnmetlab/cnmaps/commit/6869938bbab80b36295a1ec9c6fa2fe42e54a61a"
        },
        "date": 1691658348635,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.3122192538324235,
            "unit": "iter/sec",
            "range": "stddev: 0.03835874771800145",
            "extra": "mean: 3.202877425800034 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.05687379762621726,
            "unit": "iter/sec",
            "range": "stddev: 0.09879102978660292",
            "extra": "mean: 17.582789293799987 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.0572569680546936,
            "unit": "iter/sec",
            "range": "stddev: 0.2084784258210983",
            "extra": "mean: 17.4651231802 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.05783412309745341,
            "unit": "iter/sec",
            "range": "stddev: 0.06925771673948775",
            "extra": "mean: 17.290830161199985 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.057571798554588556,
            "unit": "iter/sec",
            "range": "stddev: 0.15036221866624389",
            "extra": "mean: 17.369615421199978 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.0569705792512638,
            "unit": "iter/sec",
            "range": "stddev: 0.0593738360547602",
            "extra": "mean: 17.55291964980006 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.25016903183481976,
            "unit": "iter/sec",
            "range": "stddev: 0.04332584914200233",
            "extra": "mean: 3.9972973180000735 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.1301962115574581,
            "unit": "iter/sec",
            "range": "stddev: 0.0655092616597577",
            "extra": "mean: 7.680715038000017 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 10.266623971833976,
            "unit": "iter/sec",
            "range": "stddev: 0.04784104896200701",
            "extra": "mean: 97.40300246151563 msec\nrounds: 13"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.43601468542037997,
            "unit": "iter/sec",
            "range": "stddev: 0.06569196744576794",
            "extra": "mean: 2.2935007316000338 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "clarmylee92510@gmail.com",
            "name": "Clarmy",
            "username": "Clarmy"
          },
          "committer": {
            "email": "clarmylee92510@gmail.com",
            "name": "Clarmy",
            "username": "Clarmy"
          },
          "distinct": true,
          "id": "db51ce3a68831f938912adea8bfad7ea61646e2a",
          "message": "fix: version",
          "timestamp": "2023-08-10T20:10:03+08:00",
          "tree_id": "d817b9066983c3b7e305e12c6cc1fcec955112d0",
          "url": "https://github.com/cnmetlab/cnmaps/commit/db51ce3a68831f938912adea8bfad7ea61646e2a"
        },
        "date": 1691672790225,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.3194569242306268,
            "unit": "iter/sec",
            "range": "stddev: 0.029132190209891898",
            "extra": "mean: 3.130312490199981 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.059263728591471214,
            "unit": "iter/sec",
            "range": "stddev: 0.09251864969628593",
            "extra": "mean: 16.87372738380002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.06102736953012922,
            "unit": "iter/sec",
            "range": "stddev: 0.05468133852640854",
            "extra": "mean: 16.386090498400062 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.0612574066106285,
            "unit": "iter/sec",
            "range": "stddev: 0.17548892572670194",
            "extra": "mean: 16.32455657739997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.061727290944151074,
            "unit": "iter/sec",
            "range": "stddev: 0.0673557617683009",
            "extra": "mean: 16.20028976980002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.06176261112586645,
            "unit": "iter/sec",
            "range": "stddev: 0.05877082254935454",
            "extra": "mean: 16.19102531079998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.26276574992207674,
            "unit": "iter/sec",
            "range": "stddev: 0.03149919362191425",
            "extra": "mean: 3.805671021800026 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.13494086094903582,
            "unit": "iter/sec",
            "range": "stddev: 0.05472477397497908",
            "extra": "mean: 7.410653770600129 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 11.825030864588213,
            "unit": "iter/sec",
            "range": "stddev: 0.03826005912310647",
            "extra": "mean: 84.56637546669299 msec\nrounds: 15"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.4624473689585659,
            "unit": "iter/sec",
            "range": "stddev: 0.05038204779827529",
            "extra": "mean: 2.1624082374000864 sec\nrounds: 5"
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
          "id": "442621b769012e9914bc0a5aca877f9136a24718",
          "message": "fix: warning (#105)",
          "timestamp": "2023-08-10T20:50:37+08:00",
          "tree_id": "ccab42e4735607ebcc45ef3aa2c0eeacf20f21a6",
          "url": "https://github.com/cnmetlab/cnmaps/commit/442621b769012e9914bc0a5aca877f9136a24718"
        },
        "date": 1691675030181,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.36024885613440444,
            "unit": "iter/sec",
            "range": "stddev: 0.035459573928172776",
            "extra": "mean: 2.77585891800004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.06172573948858162,
            "unit": "iter/sec",
            "range": "stddev: 0.42641826451025766",
            "extra": "mean: 16.2006969586 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.06352048387454858,
            "unit": "iter/sec",
            "range": "stddev: 0.12755136978703793",
            "extra": "mean: 15.742953123200005 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.06575686128938717,
            "unit": "iter/sec",
            "range": "stddev: 0.02692274867602504",
            "extra": "mean: 15.207538504600052 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.06582838885606432,
            "unit": "iter/sec",
            "range": "stddev: 0.11689436618995805",
            "extra": "mean: 15.191014353799982 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.06627868075005817,
            "unit": "iter/sec",
            "range": "stddev: 0.20366085081644214",
            "extra": "mean: 15.087807854400035 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.2983138713565481,
            "unit": "iter/sec",
            "range": "stddev: 0.0461060812712068",
            "extra": "mean: 3.3521739886000432 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.15599980089421098,
            "unit": "iter/sec",
            "range": "stddev: 0.033909242197896955",
            "extra": "mean: 6.410264591799932 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 12.507806095754445,
            "unit": "iter/sec",
            "range": "stddev: 0.044479189542880104",
            "extra": "mean: 79.95007216648749 msec\nrounds: 6"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.5020038576338085,
            "unit": "iter/sec",
            "range": "stddev: 0.059510946444406486",
            "extra": "mean: 1.9920165647999055 sec\nrounds: 5"
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
          "id": "cf0fa4c16f07324bac9dbd074d64ab1bbf68aca0",
          "message": "fix: warning",
          "timestamp": "2023-07-18T03:53:17Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/105/commits/cf0fa4c16f07324bac9dbd074d64ab1bbf68aca0"
        },
        "date": 1691675577566,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.26113786187173904,
            "unit": "iter/sec",
            "range": "stddev: 0.050992036964871146",
            "extra": "mean: 3.8293949135999354 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.05469212649713723,
            "unit": "iter/sec",
            "range": "stddev: 1.007549352598192",
            "extra": "mean: 18.284167466999907 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05508019633430929,
            "unit": "iter/sec",
            "range": "stddev: 0.49188064731438885",
            "extra": "mean: 18.155345597000043 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.05394256115295417,
            "unit": "iter/sec",
            "range": "stddev: 0.475901169523842",
            "extra": "mean: 18.53823731440002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.05484629952263719,
            "unit": "iter/sec",
            "range": "stddev: 0.4095632127731774",
            "extra": "mean: 18.232770646399967 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.05378365645261069,
            "unit": "iter/sec",
            "range": "stddev: 0.24149910758715615",
            "extra": "mean: 18.593008842400103 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.21754611221377762,
            "unit": "iter/sec",
            "range": "stddev: 0.07757278312172214",
            "extra": "mean: 4.596726596600002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.10670449071910393,
            "unit": "iter/sec",
            "range": "stddev: 0.14512903106434205",
            "extra": "mean: 9.371676798800035 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 10.931408074299446,
            "unit": "iter/sec",
            "range": "stddev: 0.04285348231181706",
            "extra": "mean: 91.47952333341891 msec\nrounds: 6"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.40524097301009493,
            "unit": "iter/sec",
            "range": "stddev: 0.06976426304059423",
            "extra": "mean: 2.467667552399962 sec\nrounds: 5"
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
          "id": "a622f873b045c0059481e37defba85e771d3d645",
          "message": "fix: #114",
          "timestamp": "2024-05-09T05:54:44Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/115/commits/a622f873b045c0059481e37defba85e771d3d645"
        },
        "date": 1715583982079,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.3593967574304497,
            "unit": "iter/sec",
            "range": "stddev: 0.05435377719299765",
            "extra": "mean: 2.782440239999994 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.04958895252799413,
            "unit": "iter/sec",
            "range": "stddev: 0.4973932279117426",
            "extra": "mean: 20.16578187320001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.0502943991890584,
            "unit": "iter/sec",
            "range": "stddev: 0.8921848221114699",
            "extra": "mean: 19.88292963279997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.052899073750958654,
            "unit": "iter/sec",
            "range": "stddev: 0.1172492654520492",
            "extra": "mean: 18.90392267939999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.05354085882492627,
            "unit": "iter/sec",
            "range": "stddev: 0.1594982589964257",
            "extra": "mean: 18.677324606799992 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.05345342717896547,
            "unit": "iter/sec",
            "range": "stddev: 0.04680096413112482",
            "extra": "mean: 18.707874364200006 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.30905530732655295,
            "unit": "iter/sec",
            "range": "stddev: 0.07648322628527736",
            "extra": "mean: 3.235666808799965 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.18174152262271537,
            "unit": "iter/sec",
            "range": "stddev: 0.05098134387758183",
            "extra": "mean: 5.502319918799958 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 11.957246673205706,
            "unit": "iter/sec",
            "range": "stddev: 0.0358347898677237",
            "extra": "mean: 83.63129299998816 msec\nrounds: 7"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.6156937904355583,
            "unit": "iter/sec",
            "range": "stddev: 0.03907844626704413",
            "extra": "mean: 1.6241839945999346 sec\nrounds: 5"
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
          "id": "6af8e4df02435c24e1da3cef277e87554554bcfe",
          "message": "fix: #114",
          "timestamp": "2024-05-09T05:54:44Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/115/commits/6af8e4df02435c24e1da3cef277e87554554bcfe"
        },
        "date": 1715586923760,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.416149872958325,
            "unit": "iter/sec",
            "range": "stddev: 0.04376065763410109",
            "extra": "mean: 2.4029804283999967 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.054194334794865406,
            "unit": "iter/sec",
            "range": "stddev: 0.06675247101465162",
            "extra": "mean: 18.45211319199999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.053581188796968965,
            "unit": "iter/sec",
            "range": "stddev: 0.1087718504252176",
            "extra": "mean: 18.663266389800015 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.054052828273816515,
            "unit": "iter/sec",
            "range": "stddev: 0.0922456515551959",
            "extra": "mean: 18.500419532800016 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.054403745330218516,
            "unit": "iter/sec",
            "range": "stddev: 0.09789270325116574",
            "extra": "mean: 18.381087440400005 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.05407732448965051,
            "unit": "iter/sec",
            "range": "stddev: 0.15592359439639233",
            "extra": "mean: 18.492039120600044 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.33419054801875353,
            "unit": "iter/sec",
            "range": "stddev: 0.03394466011860532",
            "extra": "mean: 2.9923048569999766 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.19683285724933855,
            "unit": "iter/sec",
            "range": "stddev: 0.054648623361282136",
            "extra": "mean: 5.080452592999995 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 14.206165466940089,
            "unit": "iter/sec",
            "range": "stddev: 0.027985470264606883",
            "extra": "mean: 70.39197187496882 msec\nrounds: 8"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.6311045007554026,
            "unit": "iter/sec",
            "range": "stddev: 0.04210971936827003",
            "extra": "mean: 1.5845236387999875 sec\nrounds: 5"
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
          "id": "a2c473ee159cb2e4abbb46cee31788dafb593427",
          "message": "fix: #114 (#115)\n\n* fix: #114\r\n\r\n* chore: bump version\r\n\r\n* chore: limit python version.\r\n\r\n* chore: deprecated python-package-conda.yml\r\n\r\n* chore: exclude win for memray",
          "timestamp": "2024-05-13T16:16:16+08:00",
          "tree_id": "1c348cce536b75ff763f65317371191541e2cb06",
          "url": "https://github.com/cnmetlab/cnmaps/commit/a2c473ee159cb2e4abbb46cee31788dafb593427"
        },
        "date": 1715589009860,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.4028617688937423,
            "unit": "iter/sec",
            "range": "stddev: 0.05538148280279133",
            "extra": "mean: 2.482240999800001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.054997618608998974,
            "unit": "iter/sec",
            "range": "stddev: 0.10921993621633355",
            "extra": "mean: 18.1826054526 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05367796769435894,
            "unit": "iter/sec",
            "range": "stddev: 0.16323713843409104",
            "extra": "mean: 18.629617382200014 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.05377925845156366,
            "unit": "iter/sec",
            "range": "stddev: 0.14062423439221244",
            "extra": "mean: 18.594529355600002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.05446920366540429,
            "unit": "iter/sec",
            "range": "stddev: 0.07667060933970937",
            "extra": "mean: 18.358997978799948 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.05343029483557306,
            "unit": "iter/sec",
            "range": "stddev: 0.19838511986536664",
            "extra": "mean: 18.71597383239996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.3213028458200774,
            "unit": "iter/sec",
            "range": "stddev: 0.034381763242602816",
            "extra": "mean: 3.1123284870000134 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.19264638499152045,
            "unit": "iter/sec",
            "range": "stddev: 0.05672668275190316",
            "extra": "mean: 5.190857850999987 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 12.632903617685807,
            "unit": "iter/sec",
            "range": "stddev: 0.03476883528932339",
            "extra": "mean: 79.1583653499913 msec\nrounds: 20"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.6214210930758047,
            "unit": "iter/sec",
            "range": "stddev: 0.03615185336918181",
            "extra": "mean: 1.6092147677999946 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "clarmylee92510@gmail.com",
            "name": "Clarmy Lee",
            "username": "Clarmy"
          },
          "committer": {
            "email": "clarmylee92510@gmail.com",
            "name": "Clarmy Lee",
            "username": "Clarmy"
          },
          "distinct": true,
          "id": "e8f27101de6a2d6cb042e82f5921eb0088569ff3",
          "message": "chore: fix version",
          "timestamp": "2024-05-13T17:12:05+08:00",
          "tree_id": "16b66de16a4fa81747506001aa7ac313992143e3",
          "url": "https://github.com/cnmetlab/cnmaps/commit/e8f27101de6a2d6cb042e82f5921eb0088569ff3"
        },
        "date": 1715592371723,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.40671948636433736,
            "unit": "iter/sec",
            "range": "stddev: 0.04072385584824624",
            "extra": "mean: 2.4586970467999776 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.053930289580585225,
            "unit": "iter/sec",
            "range": "stddev: 0.09590494700125562",
            "extra": "mean: 18.542455599200004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05297211901171015,
            "unit": "iter/sec",
            "range": "stddev: 0.04794063382641744",
            "extra": "mean: 18.877855344600004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.05353206290060805,
            "unit": "iter/sec",
            "range": "stddev: 0.09143715435378784",
            "extra": "mean: 18.68039350280001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.05319378802542987,
            "unit": "iter/sec",
            "range": "stddev: 0.10337049387466335",
            "extra": "mean: 18.79918759540003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.05323569543878578,
            "unit": "iter/sec",
            "range": "stddev: 0.08354494555405585",
            "extra": "mean: 18.78438877819999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.33162836522828254,
            "unit": "iter/sec",
            "range": "stddev: 0.027866697529857286",
            "extra": "mean: 3.01542360320002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.1924176486181254,
            "unit": "iter/sec",
            "range": "stddev: 0.040111423828769976",
            "extra": "mean: 5.197028480400013 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 12.298731996487472,
            "unit": "iter/sec",
            "range": "stddev: 0.034403023361787535",
            "extra": "mean: 81.30919515000414 msec\nrounds: 20"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.6136277947035466,
            "unit": "iter/sec",
            "range": "stddev: 0.04467779814928583",
            "extra": "mean: 1.6296523863999937 sec\nrounds: 5"
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
          "id": "68a9ee1ba236cf3c74d39d69b0585a66a5150c5b",
          "message": "fix: netcdf4 lib install problem.",
          "timestamp": "2024-06-05T01:07:17Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/116/commits/68a9ee1ba236cf3c74d39d69b0585a66a5150c5b"
        },
        "date": 1718444674701,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.4132254477623539,
            "unit": "iter/sec",
            "range": "stddev: 0.08074797202626466",
            "extra": "mean: 2.419986487799997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.05656554935430826,
            "unit": "iter/sec",
            "range": "stddev: 0.2294650466907402",
            "extra": "mean: 17.67860493560001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05628969646818329,
            "unit": "iter/sec",
            "range": "stddev: 0.04904390929522604",
            "extra": "mean: 17.765240581199997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.05675810941313633,
            "unit": "iter/sec",
            "range": "stddev: 0.08374065789971909",
            "extra": "mean: 17.61862772280001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.05697291586363126,
            "unit": "iter/sec",
            "range": "stddev: 0.11340849134804347",
            "extra": "mean: 17.55219975740001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.056765030000386435,
            "unit": "iter/sec",
            "range": "stddev: 0.12735585176006517",
            "extra": "mean: 17.616479723399994 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.3360930788820503,
            "unit": "iter/sec",
            "range": "stddev: 0.05963732471868837",
            "extra": "mean: 2.9753662388000066 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.19978104234300048,
            "unit": "iter/sec",
            "range": "stddev: 0.03632988523339249",
            "extra": "mean: 5.005479940799978 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 13.642214552748168,
            "unit": "iter/sec",
            "range": "stddev: 0.030063074824063073",
            "extra": "mean: 73.30188189999944 msec\nrounds: 20"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.641624949905242,
            "unit": "iter/sec",
            "range": "stddev: 0.03146728044571938",
            "extra": "mean: 1.5585428842000055 sec\nrounds: 5"
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
          "id": "47f0912fec68eace38b2a7bad08a3100693c4c72",
          "message": "chore: add dependabot.yml",
          "timestamp": "2024-06-05T01:07:17Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/117/commits/47f0912fec68eace38b2a7bad08a3100693c4c72"
        },
        "date": 1718445476561,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.40426255956362894,
            "unit": "iter/sec",
            "range": "stddev: 0.030997881939506224",
            "extra": "mean: 2.473639906400001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.05339648838338232,
            "unit": "iter/sec",
            "range": "stddev: 0.12039789847886435",
            "extra": "mean: 18.727823313400005 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05308256326197998,
            "unit": "iter/sec",
            "range": "stddev: 0.04262678127257914",
            "extra": "mean: 18.838577840799996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.05307530362104081,
            "unit": "iter/sec",
            "range": "stddev: 0.07845080890614772",
            "extra": "mean: 18.841154581800016 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.05314841183831054,
            "unit": "iter/sec",
            "range": "stddev: 0.11158079622873082",
            "extra": "mean: 18.8152376602 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.0525527037493641,
            "unit": "iter/sec",
            "range": "stddev: 0.2212012941236953",
            "extra": "mean: 19.028516682400003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.3274728084549933,
            "unit": "iter/sec",
            "range": "stddev: 0.02623241645970507",
            "extra": "mean: 3.053688654999996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.19517927265651946,
            "unit": "iter/sec",
            "range": "stddev: 0.03124343379957637",
            "extra": "mean: 5.1234948587999956 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 14.424960876469754,
            "unit": "iter/sec",
            "range": "stddev: 0.030539116661199375",
            "extra": "mean: 69.32427814284178 msec\nrounds: 7"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.6198556522852731,
            "unit": "iter/sec",
            "range": "stddev: 0.0626618679469988",
            "extra": "mean: 1.61327882759997 sec\nrounds: 5"
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
          "id": "b07c52adc97d63e30d0ed00db18bf71e78d36dd1",
          "message": "fix: netcdf4 lib install problem. (#116)",
          "timestamp": "2024-06-15T18:16:55+08:00",
          "tree_id": "7c4f3666d672b47d2e974b7eca18ef9edea3fa02",
          "url": "https://github.com/cnmetlab/cnmaps/commit/b07c52adc97d63e30d0ed00db18bf71e78d36dd1"
        },
        "date": 1718447425432,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.40669642974060816,
            "unit": "iter/sec",
            "range": "stddev: 0.05008424797738983",
            "extra": "mean: 2.4588364364 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.05582805502211038,
            "unit": "iter/sec",
            "range": "stddev: 0.162082806792376",
            "extra": "mean: 17.912141119799998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05392034371651822,
            "unit": "iter/sec",
            "range": "stddev: 0.14426703397921928",
            "extra": "mean: 18.545875843399994 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.052393033615876425,
            "unit": "iter/sec",
            "range": "stddev: 0.5108012693867598",
            "extra": "mean: 19.086506945399982 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.05481276485328536,
            "unit": "iter/sec",
            "range": "stddev: 0.28270675564258513",
            "extra": "mean: 18.24392552859997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.05568594768242567,
            "unit": "iter/sec",
            "range": "stddev: 0.10317551801146356",
            "extra": "mean: 17.957851875000006 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.3170638178826758,
            "unit": "iter/sec",
            "range": "stddev: 0.054447025033104016",
            "extra": "mean: 3.1539391869999918 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.19510682410205077,
            "unit": "iter/sec",
            "range": "stddev: 0.0918524051146438",
            "extra": "mean: 5.125397354000029 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 12.268814942531794,
            "unit": "iter/sec",
            "range": "stddev: 0.03438621704228663",
            "extra": "mean: 81.50746463159545 msec\nrounds: 19"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.6258801289885103,
            "unit": "iter/sec",
            "range": "stddev: 0.037931587087119085",
            "extra": "mean: 1.597750038199979 sec\nrounds: 5"
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
          "id": "e701ca0052be4645ec50ad36199582790502057b",
          "message": "chore: add dependabot.yml (#117)",
          "timestamp": "2024-06-20T11:37:11+08:00",
          "tree_id": "a464f09c4f6e577a22a66441146a2a5eee35c811",
          "url": "https://github.com/cnmetlab/cnmaps/commit/e701ca0052be4645ec50ad36199582790502057b"
        },
        "date": 1718855431024,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.40498350180235315,
            "unit": "iter/sec",
            "range": "stddev: 0.09139322401971633",
            "extra": "mean: 2.4692363899999976 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.05712556038234183,
            "unit": "iter/sec",
            "range": "stddev: 0.14298879033337766",
            "extra": "mean: 17.50529873679999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05549214253488534,
            "unit": "iter/sec",
            "range": "stddev: 0.1229124887919034",
            "extra": "mean: 18.020569297199984 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.05597105052464856,
            "unit": "iter/sec",
            "range": "stddev: 0.08940826549426259",
            "extra": "mean: 17.8663789696 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.05538690364017489,
            "unit": "iter/sec",
            "range": "stddev: 0.1637630984503264",
            "extra": "mean: 18.054809608000006 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.05549918224269271,
            "unit": "iter/sec",
            "range": "stddev: 0.11763840568317042",
            "extra": "mean: 18.018283506000035 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.33433799138111864,
            "unit": "iter/sec",
            "range": "stddev: 0.05795309971793108",
            "extra": "mean: 2.990985247799972 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.19987421901805788,
            "unit": "iter/sec",
            "range": "stddev: 0.024359508000758597",
            "extra": "mean: 5.003146503399989 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 13.181863284158895,
            "unit": "iter/sec",
            "range": "stddev: 0.03185319646945532",
            "extra": "mean: 75.86180940002123 msec\nrounds: 20"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.6368728166205463,
            "unit": "iter/sec",
            "range": "stddev: 0.04796020548951264",
            "extra": "mean: 1.5701722131999987 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "clarmylee92510@gmail.com",
            "name": "Clarmy Lee",
            "username": "Clarmy"
          },
          "committer": {
            "email": "clarmylee92510@gmail.com",
            "name": "Clarmy Lee",
            "username": "Clarmy"
          },
          "distinct": true,
          "id": "f1d5502d62f6d912d4ad4ea472f66140ae402f19",
          "message": "chore: change dependabot",
          "timestamp": "2024-06-20T12:09:22+08:00",
          "tree_id": "cbc292f4d46861d3a9989a030ea4293796087117",
          "url": "https://github.com/cnmetlab/cnmaps/commit/f1d5502d62f6d912d4ad4ea472f66140ae402f19"
        },
        "date": 1718859768775,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.4110394600396372,
            "unit": "iter/sec",
            "range": "stddev: 0.04055705146401869",
            "extra": "mean: 2.4328564462000033 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.0546893413144969,
            "unit": "iter/sec",
            "range": "stddev: 0.17968447177086028",
            "extra": "mean: 18.285098631000018 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.055054189505597526,
            "unit": "iter/sec",
            "range": "stddev: 0.18958279842679737",
            "extra": "mean: 18.163921928199976 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.05571801220094367,
            "unit": "iter/sec",
            "range": "stddev: 0.09854025856049063",
            "extra": "mean: 17.947517517200005 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.055838164458972175,
            "unit": "iter/sec",
            "range": "stddev: 0.11043868740685253",
            "extra": "mean: 17.90889814679999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.05500244130277316,
            "unit": "iter/sec",
            "range": "stddev: 0.18343342312792957",
            "extra": "mean: 18.181011175399977 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.332753166053925,
            "unit": "iter/sec",
            "range": "stddev: 0.06693925324763403",
            "extra": "mean: 3.0052306093999506 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.20067274855864006,
            "unit": "iter/sec",
            "range": "stddev: 0.046379068326583006",
            "extra": "mean: 4.98323767020006 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 14.00121960423386,
            "unit": "iter/sec",
            "range": "stddev: 0.02882973267363172",
            "extra": "mean: 71.42234950001125 msec\nrounds: 8"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.641026653847754,
            "unit": "iter/sec",
            "range": "stddev: 0.03803171120403927",
            "extra": "mean: 1.5599975352000002 sec\nrounds: 5"
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
          "id": "b9c39934fb72b478e3d2dabcf65ce9bedb69f2b5",
          "message": "chore(deps): bump netcdf4 from 1.6.5 to 1.7.1",
          "timestamp": "2024-06-20T04:49:32Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/123/commits/b9c39934fb72b478e3d2dabcf65ce9bedb69f2b5"
        },
        "date": 1718863872135,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.4175756681389455,
            "unit": "iter/sec",
            "range": "stddev: 0.04534241365859953",
            "extra": "mean: 2.3947755492 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.05656454126136483,
            "unit": "iter/sec",
            "range": "stddev: 0.14175075436007453",
            "extra": "mean: 17.678920003599995 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05566000770425902,
            "unit": "iter/sec",
            "range": "stddev: 0.09403450856185809",
            "extra": "mean: 17.966221012999995 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.0558361318744066,
            "unit": "iter/sec",
            "range": "stddev: 0.10610478866754411",
            "extra": "mean: 17.909550078600024 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.05613842224937869,
            "unit": "iter/sec",
            "range": "stddev: 0.056880687269851286",
            "extra": "mean: 17.813111946000003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.05554630941008551,
            "unit": "iter/sec",
            "range": "stddev: 0.0636188847613555",
            "extra": "mean: 18.002996249800002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.33819818578822347,
            "unit": "iter/sec",
            "range": "stddev: 0.03551504082806996",
            "extra": "mean: 2.9568461394000223 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.19987835814872484,
            "unit": "iter/sec",
            "range": "stddev: 0.03531448762387146",
            "extra": "mean: 5.003042897 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 13.517415799653326,
            "unit": "iter/sec",
            "range": "stddev: 0.03148182282462123",
            "extra": "mean: 73.97863725000207 msec\nrounds: 20"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.6463125112577094,
            "unit": "iter/sec",
            "range": "stddev: 0.032751904253389905",
            "extra": "mean: 1.547239118199991 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "clarmylee92510@gmail.com",
            "name": "Clarmy Lee",
            "username": "Clarmy"
          },
          "committer": {
            "email": "clarmylee92510@gmail.com",
            "name": "Clarmy Lee",
            "username": "Clarmy"
          },
          "distinct": true,
          "id": "ee79dd18a00502e5c3d11774e97f175ab1402507",
          "message": "chore: update dependabot",
          "timestamp": "2024-06-20T14:02:35+08:00",
          "tree_id": "9440900fb82a1a383bd5ce156665558cb393630d",
          "url": "https://github.com/cnmetlab/cnmaps/commit/ee79dd18a00502e5c3d11774e97f175ab1402507"
        },
        "date": 1718864130651,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.41818244805582444,
            "unit": "iter/sec",
            "range": "stddev: 0.0718099651290281",
            "extra": "mean: 2.3913007460000015 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.05780644133103634,
            "unit": "iter/sec",
            "range": "stddev: 0.1266088179786264",
            "extra": "mean: 17.299110219800003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05723065897175247,
            "unit": "iter/sec",
            "range": "stddev: 0.08346412517077892",
            "extra": "mean: 17.473151942799984 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.057280009700795886,
            "unit": "iter/sec",
            "range": "stddev: 0.05016296729737652",
            "extra": "mean: 17.458097601999974 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.057226452762849156,
            "unit": "iter/sec",
            "range": "stddev: 0.03447075325735403",
            "extra": "mean: 17.47443623920003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.05732140996834011,
            "unit": "iter/sec",
            "range": "stddev: 0.05744083473575568",
            "extra": "mean: 17.445488527800034 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.3483309279742876,
            "unit": "iter/sec",
            "range": "stddev: 0.035420892321805036",
            "extra": "mean: 2.870833221199973 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.2020963679850498,
            "unit": "iter/sec",
            "range": "stddev: 0.03607904565079459",
            "extra": "mean: 4.948134446800031 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 15.676473793551098,
            "unit": "iter/sec",
            "range": "stddev: 0.026110558783975082",
            "extra": "mean: 63.78985562501782 msec\nrounds: 8"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.6568341791889688,
            "unit": "iter/sec",
            "range": "stddev: 0.035628813031732924",
            "extra": "mean: 1.5224542688000156 sec\nrounds: 5"
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
          "id": "b43f7759b5d8bb5736bdad2641d23f49b49c7a4e",
          "message": "chore(deps-dev): bump black from 22.6.0 to 24.4.2",
          "timestamp": "2024-06-20T03:37:14Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/122/commits/b43f7759b5d8bb5736bdad2641d23f49b49c7a4e"
        },
        "date": 1718868696323,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.37148763586323796,
            "unit": "iter/sec",
            "range": "stddev: 0.01923309632206263",
            "extra": "mean: 2.691879630599999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.05306327825321323,
            "unit": "iter/sec",
            "range": "stddev: 0.2247871714981478",
            "extra": "mean: 18.8454244238 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05243518798400043,
            "unit": "iter/sec",
            "range": "stddev: 0.26415718445577063",
            "extra": "mean: 19.071162676200004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.05302810248320262,
            "unit": "iter/sec",
            "range": "stddev: 0.17262379136814196",
            "extra": "mean: 18.857925386199963 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.05160285289064633,
            "unit": "iter/sec",
            "range": "stddev: 0.5284086043106838",
            "extra": "mean: 19.37877353640001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.049117794380557474,
            "unit": "iter/sec",
            "range": "stddev: 0.44655380510867054",
            "extra": "mean: 20.3592203724 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.30314740808402346,
            "unit": "iter/sec",
            "range": "stddev: 0.0769026126405943",
            "extra": "mean: 3.2987252186000204 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.1880536060155752,
            "unit": "iter/sec",
            "range": "stddev: 0.05122134716933491",
            "extra": "mean: 5.317632675000004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 11.855349173387282,
            "unit": "iter/sec",
            "range": "stddev: 0.03889371174737691",
            "extra": "mean: 84.35010942105237 msec\nrounds: 19"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.5962101813017259,
            "unit": "iter/sec",
            "range": "stddev: 0.04084971183439634",
            "extra": "mean: 1.6772608576000265 sec\nrounds: 5"
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
          "id": "28a7087d5869fa5a32197de3bb46887b0c82d8a4",
          "message": "chore(deps-dev): bump pytest-cov from 4.1.0 to 5.0.0",
          "timestamp": "2024-06-20T03:37:14Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/121/commits/28a7087d5869fa5a32197de3bb46887b0c82d8a4"
        },
        "date": 1718868717989,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.3918747120303786,
            "unit": "iter/sec",
            "range": "stddev: 0.02717669778955039",
            "extra": "mean: 2.5518360059999963 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.05292782450641049,
            "unit": "iter/sec",
            "range": "stddev: 0.24683658820291365",
            "extra": "mean: 18.8936539396 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05299656828405519,
            "unit": "iter/sec",
            "range": "stddev: 0.2064880701495744",
            "extra": "mean: 18.8691462934 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.05316742623368384,
            "unit": "iter/sec",
            "range": "stddev: 0.20631564085678955",
            "extra": "mean: 18.808508721199996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.05275359926968524,
            "unit": "iter/sec",
            "range": "stddev: 0.307129133166568",
            "extra": "mean: 18.95605255080004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.05334980319435258,
            "unit": "iter/sec",
            "range": "stddev: 0.3398839411002624",
            "extra": "mean: 18.744211601999996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.325884408777529,
            "unit": "iter/sec",
            "range": "stddev: 0.08030842272122428",
            "extra": "mean: 3.068572699599963 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.1956138459569273,
            "unit": "iter/sec",
            "range": "stddev: 0.03989620561361701",
            "extra": "mean: 5.112112566000019 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 12.687340114339776,
            "unit": "iter/sec",
            "range": "stddev: 0.03480684815243985",
            "extra": "mean: 78.8187272499897 msec\nrounds: 20"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.6149264741214397,
            "unit": "iter/sec",
            "range": "stddev: 0.04775801230061057",
            "extra": "mean: 1.6262106806000247 sec\nrounds: 5"
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
          "id": "03cd45447833ddd86ad2564cb1ebe32d9f9b4330",
          "message": "chore(deps-dev): bump pytest from 7.1.2 to 8.2.2",
          "timestamp": "2024-06-20T03:37:14Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/118/commits/03cd45447833ddd86ad2564cb1ebe32d9f9b4330"
        },
        "date": 1718868756906,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.403729023455466,
            "unit": "iter/sec",
            "range": "stddev: 0.05132726859724226",
            "extra": "mean: 2.4769088718000147 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.05524318604142645,
            "unit": "iter/sec",
            "range": "stddev: 0.28557696754259754",
            "extra": "mean: 18.101779996000005 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05387954446189899,
            "unit": "iter/sec",
            "range": "stddev: 0.38142893031932584",
            "extra": "mean: 18.55991935320002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.05475852022642614,
            "unit": "iter/sec",
            "range": "stddev: 0.06895702189437004",
            "extra": "mean: 18.261998240000025 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.05478640260381,
            "unit": "iter/sec",
            "range": "stddev: 0.08976146924906273",
            "extra": "mean: 18.25270418340001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.054003542168994265,
            "unit": "iter/sec",
            "range": "stddev: 0.0897836985276151",
            "extra": "mean: 18.51730386260001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.3304194324251796,
            "unit": "iter/sec",
            "range": "stddev: 0.06444155154326198",
            "extra": "mean: 3.026456381999992 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.19682077842695495,
            "unit": "iter/sec",
            "range": "stddev: 0.09840482740436839",
            "extra": "mean: 5.08076437860002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 13.29048803392813,
            "unit": "iter/sec",
            "range": "stddev: 0.03131369119166609",
            "extra": "mean: 75.24178175001452 msec\nrounds: 20"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.6311534536333052,
            "unit": "iter/sec",
            "range": "stddev: 0.057077184369983436",
            "extra": "mean: 1.5844007415999841 sec\nrounds: 5"
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
          "id": "aff65950181a978d5916c8c28703a7b7375f115a",
          "message": "chore(deps-dev): bump flake8 from 6.1.0 to 7.1.0",
          "timestamp": "2024-06-20T03:37:14Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/119/commits/aff65950181a978d5916c8c28703a7b7375f115a"
        },
        "date": 1718868800280,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.37886595890022234,
            "unit": "iter/sec",
            "range": "stddev: 0.04497968661443013",
            "extra": "mean: 2.6394559250000045 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.051615463890415415,
            "unit": "iter/sec",
            "range": "stddev: 0.4499189742010303",
            "extra": "mean: 19.37403879820001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.051883625699759746,
            "unit": "iter/sec",
            "range": "stddev: 0.24934302497585775",
            "extra": "mean: 19.27390359699998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.05306744346401531,
            "unit": "iter/sec",
            "range": "stddev: 0.0939676599760373",
            "extra": "mean: 18.8439452652 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.053362867182652124,
            "unit": "iter/sec",
            "range": "stddev: 0.30585049572258716",
            "extra": "mean: 18.739622752600006 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.052542884514665995,
            "unit": "iter/sec",
            "range": "stddev: 0.1499391508337113",
            "extra": "mean: 19.032072739 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.31529156733858843,
            "unit": "iter/sec",
            "range": "stddev: 0.0806329927566728",
            "extra": "mean: 3.1716674455999962 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.19168641823902804,
            "unit": "iter/sec",
            "range": "stddev: 0.05935192520661511",
            "extra": "mean: 5.216853698800014 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 13.806657940865843,
            "unit": "iter/sec",
            "range": "stddev: 0.03259848564103594",
            "extra": "mean: 72.42882414288943 msec\nrounds: 7"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.6143157013765209,
            "unit": "iter/sec",
            "range": "stddev: 0.04382475153531799",
            "extra": "mean: 1.6278275123999948 sec\nrounds: 5"
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
          "id": "f7dae229b4c0cf3aae0269f559d34823c723823d",
          "message": "chore(deps): bump netcdf4 from 1.6.5 to 1.7.1.post1",
          "timestamp": "2024-06-22T14:08:03Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/124/commits/f7dae229b4c0cf3aae0269f559d34823c723823d"
        },
        "date": 1719350476299,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.37005811552437207,
            "unit": "iter/sec",
            "range": "stddev: 0.058501317875177594",
            "extra": "mean: 2.702278258600006 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.05079501784954469,
            "unit": "iter/sec",
            "range": "stddev: 0.11690024597353249",
            "extra": "mean: 19.686970146599993 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05004028251449432,
            "unit": "iter/sec",
            "range": "stddev: 0.22557250890008382",
            "extra": "mean: 19.983899965199974 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.0518217447233079,
            "unit": "iter/sec",
            "range": "stddev: 0.39030750366762457",
            "extra": "mean: 19.29691879999998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.05256093652693977,
            "unit": "iter/sec",
            "range": "stddev: 0.2136585459327138",
            "extra": "mean: 19.025536188599993 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.052083540838500364,
            "unit": "iter/sec",
            "range": "stddev: 0.28608688483242906",
            "extra": "mean: 19.199923505599987 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.32399176094628357,
            "unit": "iter/sec",
            "range": "stddev: 0.09168081853206224",
            "extra": "mean: 3.0864982401999894 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.19399112135352162,
            "unit": "iter/sec",
            "range": "stddev: 0.09382545551344279",
            "extra": "mean: 5.154875094400017 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 13.428549499479267,
            "unit": "iter/sec",
            "range": "stddev: 0.0343366185451331",
            "extra": "mean: 74.46820671426784 msec\nrounds: 7"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.6215798714388964,
            "unit": "iter/sec",
            "range": "stddev: 0.04915625070336885",
            "extra": "mean: 1.6088037047999932 sec\nrounds: 5"
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
          "id": "3a4a5c1e8a63b9c06278c9ada655087712016a43",
          "message": "perf: add dilution to speed up.",
          "timestamp": "2024-07-18T11:04:17Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/128/commits/3a4a5c1e8a63b9c06278c9ada655087712016a43"
        },
        "date": 1721408566563,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.596694092613512,
            "unit": "iter/sec",
            "range": "stddev: 0.08086606717395235",
            "extra": "mean: 1.6759006204000002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.04556365124929914,
            "unit": "iter/sec",
            "range": "stddev: 0.4160659213387602",
            "extra": "mean: 21.947319246399992 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.04418595208517961,
            "unit": "iter/sec",
            "range": "stddev: 0.45444620894265497",
            "extra": "mean: 22.631627311600006 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.045095586376056956,
            "unit": "iter/sec",
            "range": "stddev: 0.13101381821829572",
            "extra": "mean: 22.17511912719999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.043974605028720595,
            "unit": "iter/sec",
            "range": "stddev: 0.5814003286089535",
            "extra": "mean: 22.740397539600007 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.045423329514284204,
            "unit": "iter/sec",
            "range": "stddev: 0.11975207102609403",
            "extra": "mean: 22.015118898000015 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.3187467162267067,
            "unit": "iter/sec",
            "range": "stddev: 0.0522063369428866",
            "extra": "mean: 3.137287222399982 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.22352788808659296,
            "unit": "iter/sec",
            "range": "stddev: 0.03671661093097916",
            "extra": "mean: 4.473714705400016 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 12.68145756549405,
            "unit": "iter/sec",
            "range": "stddev: 0.03759171683157521",
            "extra": "mean: 78.85528889999023 msec\nrounds: 20"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.623636711050779,
            "unit": "iter/sec",
            "range": "stddev: 0.0595646891844824",
            "extra": "mean: 1.6034976489999735 sec\nrounds: 5"
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
          "id": "bc1599dee29b6e4bba505fc294e49f024188f6b9",
          "message": "chore(deps-dev): bump pytest from 7.1.2 to 8.3.1",
          "timestamp": "2024-07-22T01:16:11Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/130/commits/bc1599dee29b6e4bba505fc294e49f024188f6b9"
        },
        "date": 1721681154474,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.4125796389759337,
            "unit": "iter/sec",
            "range": "stddev: 0.055669602745270906",
            "extra": "mean: 2.4237744802000067 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.056252110749920536,
            "unit": "iter/sec",
            "range": "stddev: 0.40109914512776684",
            "extra": "mean: 17.777110701599987 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.055702186182325045,
            "unit": "iter/sec",
            "range": "stddev: 0.1963239264542749",
            "extra": "mean: 17.952616737999982 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.055897752469936765,
            "unit": "iter/sec",
            "range": "stddev: 0.15654675918268407",
            "extra": "mean: 17.889806938800007 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.05598713480031969,
            "unit": "iter/sec",
            "range": "stddev: 0.16582098785862603",
            "extra": "mean: 17.86124622320001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.05437594815885251,
            "unit": "iter/sec",
            "range": "stddev: 0.5079258560651706",
            "extra": "mean: 18.390483915399976 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.3298821161131702,
            "unit": "iter/sec",
            "range": "stddev: 0.05667615284218172",
            "extra": "mean: 3.0313859138 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.1958738467623375,
            "unit": "iter/sec",
            "range": "stddev: 0.04176485615913626",
            "extra": "mean: 5.105326803599996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 13.538916151937963,
            "unit": "iter/sec",
            "range": "stddev: 0.030444312795573202",
            "extra": "mean: 73.86115614999653 msec\nrounds: 20"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.6389333254096039,
            "unit": "iter/sec",
            "range": "stddev: 0.043601450538173034",
            "extra": "mean: 1.565108533600005 sec\nrounds: 5"
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
          "id": "bf85e4f31dac67f9917a316ddb7a696cac9cdbbf",
          "message": "chore(deps-dev): bump pytest from 7.1.2 to 8.3.2",
          "timestamp": "2024-07-22T01:16:11Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/131/commits/bf85e4f31dac67f9917a316ddb7a696cac9cdbbf"
        },
        "date": 1721942658646,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.40291245996931313,
            "unit": "iter/sec",
            "range": "stddev: 0.04681419672644113",
            "extra": "mean: 2.4819287049999956 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.05298162596292908,
            "unit": "iter/sec",
            "range": "stddev: 0.16243579525568574",
            "extra": "mean: 18.874467927799987 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.052289171973692976,
            "unit": "iter/sec",
            "range": "stddev: 0.21349986617720157",
            "extra": "mean: 19.124418350000006 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.05274561384240217,
            "unit": "iter/sec",
            "range": "stddev: 0.2279920333962299",
            "extra": "mean: 18.958922404199996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.051996620634882966,
            "unit": "iter/sec",
            "range": "stddev: 0.13463484835676473",
            "extra": "mean: 19.232019077199993 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.05288460747948527,
            "unit": "iter/sec",
            "range": "stddev: 0.1466551078436984",
            "extra": "mean: 18.909093735600003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.3253612970179165,
            "unit": "iter/sec",
            "range": "stddev: 0.039233171846681354",
            "extra": "mean: 3.073506311799997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.19493858865860406,
            "unit": "iter/sec",
            "range": "stddev: 0.044199123717211145",
            "extra": "mean: 5.129820662399993 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 13.028220767089374,
            "unit": "iter/sec",
            "range": "stddev: 0.03250635068744089",
            "extra": "mean: 76.75645184997961 msec\nrounds: 20"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.6425687289674611,
            "unit": "iter/sec",
            "range": "stddev: 0.05303229587247739",
            "extra": "mean: 1.5562537592000354 sec\nrounds: 5"
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
          "id": "96334cbed6601e86a7a36f889144253442c4935d",
          "message": "chore(deps-dev): bump black from 22.6.0 to 24.8.0",
          "timestamp": "2024-07-26T08:09:56Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/132/commits/96334cbed6601e86a7a36f889144253442c4935d"
        },
        "date": 1722632211079,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.40841663298236813,
            "unit": "iter/sec",
            "range": "stddev: 0.02749101873309152",
            "extra": "mean: 2.4484801040000037 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.05553798512291748,
            "unit": "iter/sec",
            "range": "stddev: 0.2421137057635592",
            "extra": "mean: 18.005694621199986 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.055466925724082496,
            "unit": "iter/sec",
            "range": "stddev: 0.17329352541907705",
            "extra": "mean: 18.028761950399975 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.05530936191723028,
            "unit": "iter/sec",
            "range": "stddev: 0.1913923287279425",
            "extra": "mean: 18.08012179739999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.05647952327355,
            "unit": "iter/sec",
            "range": "stddev: 0.08613594868200442",
            "extra": "mean: 17.705531881999992 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.05561068288521468,
            "unit": "iter/sec",
            "range": "stddev: 0.17324430318560013",
            "extra": "mean: 17.98215645119999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.323704301064077,
            "unit": "iter/sec",
            "range": "stddev: 0.045496068996538665",
            "extra": "mean: 3.0892391503999534 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.19486104887532868,
            "unit": "iter/sec",
            "range": "stddev: 0.052542004246645055",
            "extra": "mean: 5.131861938399993 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 12.799925500050604,
            "unit": "iter/sec",
            "range": "stddev: 0.035663306722185414",
            "extra": "mean: 78.12545471425177 msec\nrounds: 7"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.6092824050852169,
            "unit": "iter/sec",
            "range": "stddev: 0.060033544236016936",
            "extra": "mean: 1.641275033800025 sec\nrounds: 5"
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
          "id": "e7caa96e1b5a54e144e03dab99c48b1181d1028a",
          "message": "chore(deps-dev): bump flake8 from 6.1.0 to 7.1.1",
          "timestamp": "2024-07-26T08:09:56Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/133/commits/e7caa96e1b5a54e144e03dab99c48b1181d1028a"
        },
        "date": 1722890083738,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.39971752764953833,
            "unit": "iter/sec",
            "range": "stddev: 0.0369845199895305",
            "extra": "mean: 2.5017666997999983 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.054357401685064866,
            "unit": "iter/sec",
            "range": "stddev: 0.14149974069684723",
            "extra": "mean: 18.396758656599992 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05336164963152224,
            "unit": "iter/sec",
            "range": "stddev: 0.14788872052791147",
            "extra": "mean: 18.74005033400001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.05382236010985955,
            "unit": "iter/sec",
            "range": "stddev: 0.09191867043734478",
            "extra": "mean: 18.579638610400014 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.05349685247740329,
            "unit": "iter/sec",
            "range": "stddev: 0.13088612521170814",
            "extra": "mean: 18.69268851700001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.0545262205177279,
            "unit": "iter/sec",
            "range": "stddev: 0.21256215149788618",
            "extra": "mean: 18.339800384199997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.3342304473154006,
            "unit": "iter/sec",
            "range": "stddev: 0.06160274522052382",
            "extra": "mean: 2.991947645800019 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.19684093891901458,
            "unit": "iter/sec",
            "range": "stddev: 0.04032308658099157",
            "extra": "mean: 5.080244005600003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 13.478200764114256,
            "unit": "iter/sec",
            "range": "stddev: 0.030771998410510537",
            "extra": "mean: 74.19387925000365 msec\nrounds: 8"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.6405693014262923,
            "unit": "iter/sec",
            "range": "stddev: 0.03256648501488422",
            "extra": "mean: 1.561111339199988 sec\nrounds: 5"
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
          "id": "6ce9da72c7b399587a42e7d7e6c124a32f2b2130",
          "message": "chore(deps): bump netcdf4 from 1.6.5 to 1.7.1.post2",
          "timestamp": "2024-08-07T01:14:47Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/134/commits/6ce9da72c7b399587a42e7d7e6c124a32f2b2130"
        },
        "date": 1723495313512,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.38165806916487555,
            "unit": "iter/sec",
            "range": "stddev: 0.06832783749678592",
            "extra": "mean: 2.62014635820002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.050788247214623716,
            "unit": "iter/sec",
            "range": "stddev: 0.3393363289014608",
            "extra": "mean: 19.68959463739999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05241293318673445,
            "unit": "iter/sec",
            "range": "stddev: 0.22187793223570648",
            "extra": "mean: 19.079260388599984 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.052114747762367235,
            "unit": "iter/sec",
            "range": "stddev: 0.486742544570542",
            "extra": "mean: 19.18842636559998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.05234033218981023,
            "unit": "iter/sec",
            "range": "stddev: 0.2987784332831",
            "extra": "mean: 19.10572512939998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.05043266547176443,
            "unit": "iter/sec",
            "range": "stddev: 0.3255043974027865",
            "extra": "mean: 19.828418558600013 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.31409191929869673,
            "unit": "iter/sec",
            "range": "stddev: 0.048741896313317885",
            "extra": "mean: 3.1837813663999897 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.19230507206972228,
            "unit": "iter/sec",
            "range": "stddev: 0.041585735912583466",
            "extra": "mean: 5.200070852200088 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 12.0510025857539,
            "unit": "iter/sec",
            "range": "stddev: 0.037280427992826604",
            "extra": "mean: 82.98064769998064 msec\nrounds: 20"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.6053830214643924,
            "unit": "iter/sec",
            "range": "stddev: 0.050956262953241196",
            "extra": "mean: 1.6518467888000032 sec\nrounds: 5"
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
          "id": "ec7eacc8e6da46bedce3e3473fcdc36bb5b82631",
          "message": "chore(deps-dev): bump pytest from 7.1.2 to 8.3.3",
          "timestamp": "2024-08-21T02:42:57Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/136/commits/ec7eacc8e6da46bedce3e3473fcdc36bb5b82631"
        },
        "date": 1726001969369,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.43510352584661105,
            "unit": "iter/sec",
            "range": "stddev: 0.07156886365959282",
            "extra": "mean: 2.2983036003999984 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.0582073033803459,
            "unit": "iter/sec",
            "range": "stddev: 0.14414156701195402",
            "extra": "mean: 17.179974709800025 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05701881824664231,
            "unit": "iter/sec",
            "range": "stddev: 0.08371316413434604",
            "extra": "mean: 17.538069548800014 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.057485219473087865,
            "unit": "iter/sec",
            "range": "stddev: 0.12959547035748326",
            "extra": "mean: 17.395775978000007 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.05727973085066095,
            "unit": "iter/sec",
            "range": "stddev: 0.14408281216837363",
            "extra": "mean: 17.45818259180003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.05671228775222805,
            "unit": "iter/sec",
            "range": "stddev: 0.056896807440395096",
            "extra": "mean: 17.632862993800018 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.3613001038574253,
            "unit": "iter/sec",
            "range": "stddev: 0.05142430208700569",
            "extra": "mean: 2.7677822102000165 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.21171206431319542,
            "unit": "iter/sec",
            "range": "stddev: 0.02877088407730581",
            "extra": "mean: 4.723396388600008 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 13.893792846422457,
            "unit": "iter/sec",
            "range": "stddev: 0.0297000146555787",
            "extra": "mean: 71.97458685714408 msec\nrounds: 21"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.6802454494227983,
            "unit": "iter/sec",
            "range": "stddev: 0.04221698321266217",
            "extra": "mean: 1.4700576105999972 sec\nrounds: 5"
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
          "id": "233c0e661ee89aaef3eaac4665e03d729bf983cb",
          "message": "fix: dependences",
          "timestamp": "2024-09-11T06:38:59Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/137/commits/233c0e661ee89aaef3eaac4665e03d729bf983cb"
        },
        "date": 1726590789381,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.4294839830454772,
            "unit": "iter/sec",
            "range": "stddev: 0.03942685900885757",
            "extra": "mean: 2.328375537800002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.05590962537297163,
            "unit": "iter/sec",
            "range": "stddev: 0.13528126187930742",
            "extra": "mean: 17.88600788019999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05524860472147117,
            "unit": "iter/sec",
            "range": "stddev: 0.16840332612392417",
            "extra": "mean: 18.100004607200002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.053131842442433776,
            "unit": "iter/sec",
            "range": "stddev: 0.22632970046924583",
            "extra": "mean: 18.82110527379998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.05341105401125935,
            "unit": "iter/sec",
            "range": "stddev: 0.6129234607353611",
            "extra": "mean: 18.722716084000034 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.05463014193402376,
            "unit": "iter/sec",
            "range": "stddev: 0.050709900836350505",
            "extra": "mean: 18.304913086399985 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.33351592507558486,
            "unit": "iter/sec",
            "range": "stddev: 0.08332738775470505",
            "extra": "mean: 2.9983575740000106 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.19197174220185068,
            "unit": "iter/sec",
            "range": "stddev: 0.1330939495618434",
            "extra": "mean: 5.209099988000003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 12.806350392541061,
            "unit": "iter/sec",
            "range": "stddev: 0.033679516599558236",
            "extra": "mean: 78.08625950000874 msec\nrounds: 20"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.6234526967054626,
            "unit": "iter/sec",
            "range": "stddev: 0.05395674714995744",
            "extra": "mean: 1.6039709271999982 sec\nrounds: 5"
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
          "id": "37f73c082529d76236b4431d4b713867706785dd",
          "message": "fix: dependences (#137)",
          "timestamp": "2024-09-18T02:24:28+08:00",
          "tree_id": "f5f3570e082a6f46de7f4914f7e3ec78f0675759",
          "url": "https://github.com/cnmetlab/cnmaps/commit/37f73c082529d76236b4431d4b713867706785dd"
        },
        "date": 1726598311732,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.40570567532490726,
            "unit": "iter/sec",
            "range": "stddev: 0.07128837809350853",
            "extra": "mean: 2.464841043199988 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.053377658502498454,
            "unit": "iter/sec",
            "range": "stddev: 0.22700344651256868",
            "extra": "mean: 18.73442987300001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05320571626231671,
            "unit": "iter/sec",
            "range": "stddev: 0.17031188659988467",
            "extra": "mean: 18.79497298880001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.0539287000969453,
            "unit": "iter/sec",
            "range": "stddev: 0.23111067663174298",
            "extra": "mean: 18.543002115799993 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.051439616692624694,
            "unit": "iter/sec",
            "range": "stddev: 0.23177135335008356",
            "extra": "mean: 19.440269276799995 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.05167727184616376,
            "unit": "iter/sec",
            "range": "stddev: 0.10329543888253503",
            "extra": "mean: 19.35086672099999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.31371590421909334,
            "unit": "iter/sec",
            "range": "stddev: 0.07077057234171658",
            "extra": "mean: 3.1875973980000025 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.1857740825523042,
            "unit": "iter/sec",
            "range": "stddev: 0.08564202558401258",
            "extra": "mean: 5.382882188200028 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 11.954378891411334,
            "unit": "iter/sec",
            "range": "stddev: 0.03900300467728375",
            "extra": "mean: 83.65135563157142 msec\nrounds: 19"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.6038999983397536,
            "unit": "iter/sec",
            "range": "stddev: 0.06049637755012466",
            "extra": "mean: 1.6559032997999794 sec\nrounds: 5"
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
          "id": "d353ee1304154076fb18a28b06956c99922cf108",
          "message": "chore(deps-dev): bump pytest from 7.1.2 to 8.3.3",
          "timestamp": "2024-09-17T18:24:41Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/136/commits/d353ee1304154076fb18a28b06956c99922cf108"
        },
        "date": 1726598371131,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.41536669787368086,
            "unit": "iter/sec",
            "range": "stddev: 0.06530668564982757",
            "extra": "mean: 2.407511254800005 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.056678543795401624,
            "unit": "iter/sec",
            "range": "stddev: 0.0667028732653363",
            "extra": "mean: 17.643360838800003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.054803417105254465,
            "unit": "iter/sec",
            "range": "stddev: 0.08679115123997926",
            "extra": "mean: 18.247037371399994 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.05511074004592284,
            "unit": "iter/sec",
            "range": "stddev: 0.6841131806957753",
            "extra": "mean: 18.14528346320004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.0558704787212891,
            "unit": "iter/sec",
            "range": "stddev: 0.06067903299643193",
            "extra": "mean: 17.89854003200005 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.056282104061623345,
            "unit": "iter/sec",
            "range": "stddev: 0.18810241020300084",
            "extra": "mean: 17.76763709659999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.35390467031078277,
            "unit": "iter/sec",
            "range": "stddev: 0.062260169767887494",
            "extra": "mean: 2.8256196763999926 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.20056700458265103,
            "unit": "iter/sec",
            "range": "stddev: 0.07755298097848569",
            "extra": "mean: 4.985864958599973 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 13.661957069572962,
            "unit": "iter/sec",
            "range": "stddev: 0.0316053986883699",
            "extra": "mean: 73.19595537502721 msec\nrounds: 8"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.6287518552972288,
            "unit": "iter/sec",
            "range": "stddev: 0.039431873118463974",
            "extra": "mean: 1.5904525634000266 sec\nrounds: 5"
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
          "id": "5f97cb65fc9f6721c648e515546af7db67c101c2",
          "message": "Support Shapely 2 and update version to 1.1.10",
          "timestamp": "2026-03-26T09:10:40Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/144/commits/5f97cb65fc9f6721c648e515546af7db67c101c2"
        },
        "date": 1774711868709,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.40193417535553766,
            "unit": "iter/sec",
            "range": "stddev: 0.047061947746587",
            "extra": "mean: 2.487969576399999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.05488737459323182,
            "unit": "iter/sec",
            "range": "stddev: 0.15057154414084067",
            "extra": "mean: 18.21912611800001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.054759142906487465,
            "unit": "iter/sec",
            "range": "stddev: 0.05647534463735959",
            "extra": "mean: 18.2617905782 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.05536544537778635,
            "unit": "iter/sec",
            "range": "stddev: 0.10106964945156424",
            "extra": "mean: 18.06180720079999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.055760835476025825,
            "unit": "iter/sec",
            "range": "stddev: 0.1102458467530921",
            "extra": "mean: 17.93373416059999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.05582605287913402,
            "unit": "iter/sec",
            "range": "stddev: 0.04215252650423496",
            "extra": "mean: 17.912783519999994 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.3349273320630275,
            "unit": "iter/sec",
            "range": "stddev: 0.02257227074969185",
            "extra": "mean: 2.9857222873999945 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.1866799681480541,
            "unit": "iter/sec",
            "range": "stddev: 0.07658164948087794",
            "extra": "mean: 5.356761145399969 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 1.1205387090064762,
            "unit": "iter/sec",
            "range": "stddev: 0.0010040810553347665",
            "extra": "mean: 892.4278937999816 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.008636762243274457,
            "unit": "iter/sec",
            "range": "stddev: 0.35657581725115634",
            "extra": "mean: 115.7841297274 sec\nrounds: 5"
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
          "id": "2b52940cfa505d925b33c11526638718b4da3140",
          "message": "Support Shapely 2 and update version to 1.1.10",
          "timestamp": "2026-03-26T09:10:40Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/144/commits/2b52940cfa505d925b33c11526638718b4da3140"
        },
        "date": 1774711997566,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.4349765199422247,
            "unit": "iter/sec",
            "range": "stddev: 0.045573275983586854",
            "extra": "mean: 2.298974666800001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.060661835006726825,
            "unit": "iter/sec",
            "range": "stddev: 0.12458444472626817",
            "extra": "mean: 16.4848293806 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.059785130169063214,
            "unit": "iter/sec",
            "range": "stddev: 0.15395401175320728",
            "extra": "mean: 16.726567244599998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.0611699689356935,
            "unit": "iter/sec",
            "range": "stddev: 0.07647338599750363",
            "extra": "mean: 16.347891251200007 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.06110849969851595,
            "unit": "iter/sec",
            "range": "stddev: 0.05254095181840668",
            "extra": "mean: 16.364335647799997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.06103238290857067,
            "unit": "iter/sec",
            "range": "stddev: 0.10038538201170678",
            "extra": "mean: 16.384744496999996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.3535592653341641,
            "unit": "iter/sec",
            "range": "stddev: 0.0297133004796495",
            "extra": "mean: 2.828380127599985 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.19692990210968744,
            "unit": "iter/sec",
            "range": "stddev: 0.059836221049774894",
            "extra": "mean: 5.0779490025999845 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 1.1246766873932075,
            "unit": "iter/sec",
            "range": "stddev: 0.0006347152748118225",
            "extra": "mean: 889.1444191999881 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.009234160147392721,
            "unit": "iter/sec",
            "range": "stddev: 0.03594479901250635",
            "extra": "mean: 108.29355177279999 sec\nrounds: 5"
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
          "id": "69a9f3888ed2a90670ecdf39850ddbeb53d35b4d",
          "message": "Support Shapely 2 and update version to 1.1.10",
          "timestamp": "2026-03-26T09:10:40Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/144/commits/69a9f3888ed2a90670ecdf39850ddbeb53d35b4d"
        },
        "date": 1774714710944,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.38343139318722186,
            "unit": "iter/sec",
            "range": "stddev: 0.058036047190862486",
            "extra": "mean: 2.6080284968000003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.05157402514821657,
            "unit": "iter/sec",
            "range": "stddev: 0.07863925404898377",
            "extra": "mean: 19.3896054676 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05174536475915145,
            "unit": "iter/sec",
            "range": "stddev: 0.24324114083224221",
            "extra": "mean: 19.325402471400004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.052773752118300855,
            "unit": "iter/sec",
            "range": "stddev: 0.09567432737684808",
            "extra": "mean: 18.94881375419999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.052600711225489795,
            "unit": "iter/sec",
            "range": "stddev: 0.11948934930114738",
            "extra": "mean: 19.011149786800026 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.05282042002994383,
            "unit": "iter/sec",
            "range": "stddev: 0.07244840866343503",
            "extra": "mean: 18.932072093199963 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.3179961860782723,
            "unit": "iter/sec",
            "range": "stddev: 0.05492966664867504",
            "extra": "mean: 3.1446918037999922 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.18321874233512805,
            "unit": "iter/sec",
            "range": "stddev: 0.026358759013685576",
            "extra": "mean: 5.457956905799984 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 1.114140460508761,
            "unit": "iter/sec",
            "range": "stddev: 0.000924443788995913",
            "extra": "mean: 897.5528987999951 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.008168651132244223,
            "unit": "iter/sec",
            "range": "stddev: 0.8351752559328494",
            "extra": "mean: 122.41923223439998 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "clarmyleewt@outlook.com",
            "name": "Wentao Li",
            "username": "Clarmy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bc09c1905909fab115c41be477aa85aabb124237",
          "message": "Support Shapely 2 and update version to 1.1.10 (#144)\n\n* Support Shapely 2 and bump version to 1.1.10\n\n* Add Cartopy path import fallback\n\n* Force Agg backend in CI\n\n* Enable Python 3.12 in CI\n\n* Refresh poetry lock for Python 3.12\n\n* Require Shapely 2 across supported Python versions\n\n* Retry poetry install in CI\n\n* Cache map loading and speed up geometry cleanup\n\n* Set timeout for build jobs in GitHub workflows to 60 minutes\n\n* Add pytest markers for heavy tests and update CI configurations to skip heavy tests by default. Introduce fast versions of maskout test data for performance benchmarking.\n\n* Update flake8 max line length to 120 and add noqa comments for E501 in docstrings. Remove unused import from maps.py and adjust pytest command in CI workflows to skip heavy tests.\n\n* Update GitHub Actions workflow to use GitHub token for authentication and adjust permissions for gh-pages and PR comments.\n\n* Update GitHub Actions workflows to use updated versions of checkout and setup-python actions\n\n* Update documentation and copyright information; enhance API references and examples for clarity",
          "timestamp": "2026-03-29T00:09:50+08:00",
          "tree_id": "5de3b81cff03a2176a76476c88a088e126afddaa",
          "url": "https://github.com/cnmetlab/cnmaps/commit/bc09c1905909fab115c41be477aa85aabb124237"
        },
        "date": 1774715810452,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.39405505713977657,
            "unit": "iter/sec",
            "range": "stddev: 0.06733956181286838",
            "extra": "mean: 2.5377164481999954 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.055158958978557736,
            "unit": "iter/sec",
            "range": "stddev: 0.13716652503949286",
            "extra": "mean: 18.129421195 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05556871002880052,
            "unit": "iter/sec",
            "range": "stddev: 0.07741032288504027",
            "extra": "mean: 17.995738959599986 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.05586975849324352,
            "unit": "iter/sec",
            "range": "stddev: 0.06723352128080182",
            "extra": "mean: 17.898770765600013 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.05645766293579856,
            "unit": "iter/sec",
            "range": "stddev: 0.07800866701671764",
            "extra": "mean: 17.71238744220002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.05600398138531301,
            "unit": "iter/sec",
            "range": "stddev: 0.07869223976238823",
            "extra": "mean: 17.85587337300003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.3279238601060602,
            "unit": "iter/sec",
            "range": "stddev: 0.024593671972471746",
            "extra": "mean: 3.0494883772000323 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.1838762033596373,
            "unit": "iter/sec",
            "range": "stddev: 0.11578991151824364",
            "extra": "mean: 5.438441634799983 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 1.1188370035918784,
            "unit": "iter/sec",
            "range": "stddev: 0.0012366230026673475",
            "extra": "mean: 893.7852401999862 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.008614819873608638,
            "unit": "iter/sec",
            "range": "stddev: 0.13924983149214326",
            "extra": "mean: 116.07903759700002 sec\nrounds: 5"
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
          "id": "a231166ec03071aec6517e5be14fd47b60a61615",
          "message": "Enhance documentation and update flake8 configuration and CI badge",
          "timestamp": "2026-03-28T16:10:02Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/145/commits/a231166ec03071aec6517e5be14fd47b60a61615"
        },
        "date": 1774755936760,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.4111235313302331,
            "unit": "iter/sec",
            "range": "stddev: 0.06843091098383723",
            "extra": "mean: 2.4323589475999965 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.05809904968104632,
            "unit": "iter/sec",
            "range": "stddev: 0.16049545375517682",
            "extra": "mean: 17.2119854884 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05557527264217396,
            "unit": "iter/sec",
            "range": "stddev: 0.26257502865972876",
            "extra": "mean: 17.99361393040001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.057616460032550026,
            "unit": "iter/sec",
            "range": "stddev: 0.08294887135321714",
            "extra": "mean: 17.356151340000007 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.060020784202905006,
            "unit": "iter/sec",
            "range": "stddev: 0.20322944768748882",
            "extra": "mean: 16.660895276200005 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.0593721164373505,
            "unit": "iter/sec",
            "range": "stddev: 0.23934845661806214",
            "extra": "mean: 16.842923244200005 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.3435528294055236,
            "unit": "iter/sec",
            "range": "stddev: 0.017258989578473785",
            "extra": "mean: 2.9107604840000247 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.19042090198854852,
            "unit": "iter/sec",
            "range": "stddev: 0.09077858358365139",
            "extra": "mean: 5.251524331400015 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 1.1128099302126502,
            "unit": "iter/sec",
            "range": "stddev: 0.0018037428484380354",
            "extra": "mean: 898.6260571999992 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.00889725639529916,
            "unit": "iter/sec",
            "range": "stddev: 1.438524489074897",
            "extra": "mean: 112.39419834280004 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "clarmyleewt@outlook.com",
            "name": "Wentao Li",
            "username": "Clarmy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d6fa39952fd0d886a1064775552046e0d7a7663",
          "message": "Enhance documentation and update flake8 configuration and CI badge (#145)\n\n* Update flake8 configuration to exclude specific directories and enhance API documentation for map_polygon parameter in usage and API reference. Improve installation instructions and contributor guide with CI details and Python version requirements.\n\n* Update README to change CI workflow badge from python-package-conda.yml to python-package.yml for improved clarity.",
          "timestamp": "2026-03-29T11:20:56+08:00",
          "tree_id": "31b63034ab1fb31d1b2e819e89d1279908373e2e",
          "url": "https://github.com/cnmetlab/cnmaps/commit/6d6fa39952fd0d886a1064775552046e0d7a7663"
        },
        "date": 1774755940101,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.45426740692269935,
            "unit": "iter/sec",
            "range": "stddev: 0.05863732887680044",
            "extra": "mean: 2.2013465741999965 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.058226052954818044,
            "unit": "iter/sec",
            "range": "stddev: 0.04108970382545656",
            "extra": "mean: 17.174442526199996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05789642713518209,
            "unit": "iter/sec",
            "range": "stddev: 0.14816193414837817",
            "extra": "mean: 17.272222993400003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.05906708362935345,
            "unit": "iter/sec",
            "range": "stddev: 0.028936783552951137",
            "extra": "mean: 16.929903061999983 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.05943718112861127,
            "unit": "iter/sec",
            "range": "stddev: 0.07868055777617217",
            "extra": "mean: 16.824485633599977 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.05874478173536,
            "unit": "iter/sec",
            "range": "stddev: 0.1293554162652885",
            "extra": "mean: 17.022788585800026 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.37691987300615515,
            "unit": "iter/sec",
            "range": "stddev: 0.03781884366929464",
            "extra": "mean: 2.6530837762000146 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.21443981706116697,
            "unit": "iter/sec",
            "range": "stddev: 0.04429692419863062",
            "extra": "mean: 4.66331306239997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 1.3490211142606314,
            "unit": "iter/sec",
            "range": "stddev: 0.0012191718476134846",
            "extra": "mean: 741.2782419999985 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.009913634420788844,
            "unit": "iter/sec",
            "range": "stddev: 0.23523857787892422",
            "extra": "mean: 100.87117978679996 sec\nrounds: 5"
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
          "id": "3db5cd527f824e0f44028032557d3f4fbd6cffce",
          "message": "Add external data provider support and slim package distribution",
          "timestamp": "2026-03-29T03:21:00Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/146/commits/3db5cd527f824e0f44028032557d3f4fbd6cffce"
        },
        "date": 1774765498960,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.41044603137229463,
            "unit": "iter/sec",
            "range": "stddev: 0.06450949143968329",
            "extra": "mean: 2.436373904399994 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.059704419384826284,
            "unit": "iter/sec",
            "range": "stddev: 0.1830734484719736",
            "extra": "mean: 16.749178876600002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.059221419207921115,
            "unit": "iter/sec",
            "range": "stddev: 0.18954429796362982",
            "extra": "mean: 16.885782430999996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.05989412162266288,
            "unit": "iter/sec",
            "range": "stddev: 0.07968842596326099",
            "extra": "mean: 16.69612931800001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.060378383749607446,
            "unit": "iter/sec",
            "range": "stddev: 0.09313995143808299",
            "extra": "mean: 16.56221875939999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.060244386614842826,
            "unit": "iter/sec",
            "range": "stddev: 0.1058179228680788",
            "extra": "mean: 16.599056878000034 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.3410176875886837,
            "unit": "iter/sec",
            "range": "stddev: 0.019879660080939505",
            "extra": "mean: 2.9323992167999906 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.18846344113045063,
            "unit": "iter/sec",
            "range": "stddev: 0.02626016209009866",
            "extra": "mean: 5.306068880000021 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 1.1327087297391796,
            "unit": "iter/sec",
            "range": "stddev: 0.0010101557222679228",
            "extra": "mean: 882.8394924000122 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.008896204743717832,
            "unit": "iter/sec",
            "range": "stddev: 2.932685236005308",
            "extra": "mean: 112.40748485540003 sec\nrounds: 5"
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
          "id": "5ee2d6301eb994039373eceaa6e7d97899041764",
          "message": "Add external data provider support and slim package distribution",
          "timestamp": "2026-03-29T03:21:00Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/146/commits/5ee2d6301eb994039373eceaa6e7d97899041764"
        },
        "date": 1774767582700,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.4026446126573201,
            "unit": "iter/sec",
            "range": "stddev: 0.09971285101673481",
            "extra": "mean: 2.483579734 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.05666686539060136,
            "unit": "iter/sec",
            "range": "stddev: 0.3735785993097744",
            "extra": "mean: 17.646996937399997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05745185129943333,
            "unit": "iter/sec",
            "range": "stddev: 0.21663432046195802",
            "extra": "mean: 17.405879486599996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.05803608354096944,
            "unit": "iter/sec",
            "range": "stddev: 0.12451881321361331",
            "extra": "mean: 17.230659599800003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.05799368669659103,
            "unit": "iter/sec",
            "range": "stddev: 0.12485910837955087",
            "extra": "mean: 17.243256239800008 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.05728320536523742,
            "unit": "iter/sec",
            "range": "stddev: 0.1299866492146715",
            "extra": "mean: 17.457123665200037 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.32964529163245937,
            "unit": "iter/sec",
            "range": "stddev: 0.07983737529455978",
            "extra": "mean: 3.0335637286000066 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.18482704858554663,
            "unit": "iter/sec",
            "range": "stddev: 0.03476833570003183",
            "extra": "mean: 5.410463499000002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 1.1161698458509839,
            "unit": "iter/sec",
            "range": "stddev: 0.0015316276925910154",
            "extra": "mean: 895.920996000018 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.008847990068110193,
            "unit": "iter/sec",
            "range": "stddev: 1.0245581711784781",
            "extra": "mean: 113.02001836600004 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "clarmyleewt@outlook.com",
            "name": "Wentao Li",
            "username": "Clarmy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eaa3b1440614382fd07f1e9d588ee4f0ae69de9f",
          "message": "Add external data provider support and slim package distribution (#146)\n\n* Add external data provider support\n\n* Slim package distribution by excluding bundled data\n\n* Prepare cnmaps 2.0.0b1 data package split\n\n* Clarify conda distribution support\n\n* Add explicit data provider selection",
          "timestamp": "2026-03-29T15:21:32+08:00",
          "tree_id": "0d31c2f70574c3181607eff00792638d25936859",
          "url": "https://github.com/cnmetlab/cnmaps/commit/eaa3b1440614382fd07f1e9d588ee4f0ae69de9f"
        },
        "date": 1774770470911,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.40680966211252667,
            "unit": "iter/sec",
            "range": "stddev: 0.07306042595343201",
            "extra": "mean: 2.458152038000003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.05699455914788079,
            "unit": "iter/sec",
            "range": "stddev: 0.6941346899079306",
            "extra": "mean: 17.545534432600004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.058537103041037306,
            "unit": "iter/sec",
            "range": "stddev: 0.19707100135631278",
            "extra": "mean: 17.083182256200008 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.05785192880857792,
            "unit": "iter/sec",
            "range": "stddev: 0.27824753635187105",
            "extra": "mean: 17.285508376200006 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.05586092620998954,
            "unit": "iter/sec",
            "range": "stddev: 0.43518328689362423",
            "extra": "mean: 17.901600776200006 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.05813924923206873,
            "unit": "iter/sec",
            "range": "stddev: 0.4426554954741163",
            "extra": "mean: 17.20008450759999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.34795106584785673,
            "unit": "iter/sec",
            "range": "stddev: 0.04804750959340011",
            "extra": "mean: 2.8739673423999648 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.18755459034004957,
            "unit": "iter/sec",
            "range": "stddev: 0.05515703811806621",
            "extra": "mean: 5.3317809934000024 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 1.1018727166667246,
            "unit": "iter/sec",
            "range": "stddev: 0.00047844325819647",
            "extra": "mean: 907.545839799991 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.008806623957315008,
            "unit": "iter/sec",
            "range": "stddev: 1.932169202626462",
            "extra": "mean: 113.55089133439999 sec\nrounds: 5"
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
          "id": "1fa560304b01c8f791e0453f63bec34e002a124f",
          "message": "Simplify bounded clipping workflows and apply axes clip box",
          "timestamp": "2026-03-29T07:21:38Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/147/commits/1fa560304b01c8f791e0453f63bec34e002a124f"
        },
        "date": 1774776431249,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.4550264445093255,
            "unit": "iter/sec",
            "range": "stddev: 0.05068291142927279",
            "extra": "mean: 2.197674469399999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.057749243413022136,
            "unit": "iter/sec",
            "range": "stddev: 0.08435445487742359",
            "extra": "mean: 17.3162441774 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.057324497640554375,
            "unit": "iter/sec",
            "range": "stddev: 0.06938269020699363",
            "extra": "mean: 17.444548860599998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.058349044374362655,
            "unit": "iter/sec",
            "range": "stddev: 0.03802801414706436",
            "extra": "mean: 17.138241263800012 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.058611748258231726,
            "unit": "iter/sec",
            "range": "stddev: 0.04555692388007021",
            "extra": "mean: 17.06142590380001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.058905487786036805,
            "unit": "iter/sec",
            "range": "stddev: 0.12016332872252242",
            "extra": "mean: 16.97634698539996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.371778440649168,
            "unit": "iter/sec",
            "range": "stddev: 0.03625205942041159",
            "extra": "mean: 2.689774044600017 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.21089222773680225,
            "unit": "iter/sec",
            "range": "stddev: 0.027818653297687075",
            "extra": "mean: 4.74175843620003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 1.3167605305189507,
            "unit": "iter/sec",
            "range": "stddev: 0.006932528432360736",
            "extra": "mean: 759.4395312000188 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.009873828853171661,
            "unit": "iter/sec",
            "range": "stddev: 0.1271722009020441",
            "extra": "mean: 101.27783404700001 sec\nrounds: 5"
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
          "id": "38d291ddeecbaef2e4d3b4bbb6f4d4be9e1c76f0",
          "message": "Simplify bounded clipping workflows and apply axes clip box",
          "timestamp": "2026-03-29T07:21:38Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/147/commits/38d291ddeecbaef2e4d3b4bbb6f4d4be9e1c76f0"
        },
        "date": 1774776435197,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.41719752141313776,
            "unit": "iter/sec",
            "range": "stddev: 0.06000256386792269",
            "extra": "mean: 2.3969461674000003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.060409921355610414,
            "unit": "iter/sec",
            "range": "stddev: 0.39986717593094256",
            "extra": "mean: 16.553572286799998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.059838968795586873,
            "unit": "iter/sec",
            "range": "stddev: 0.20512459206159506",
            "extra": "mean: 16.71151793100001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.06045917390276715,
            "unit": "iter/sec",
            "range": "stddev: 0.17132159130074429",
            "extra": "mean: 16.540087061200005 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.06104159053660973,
            "unit": "iter/sec",
            "range": "stddev: 0.1322007197538975",
            "extra": "mean: 16.382272991400008 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.06097116734033546,
            "unit": "iter/sec",
            "range": "stddev: 0.11212537633926191",
            "extra": "mean: 16.401194919199952 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.35185872103327803,
            "unit": "iter/sec",
            "range": "stddev: 0.01330210157103841",
            "extra": "mean: 2.8420497780000233 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.19073108872010677,
            "unit": "iter/sec",
            "range": "stddev: 0.056550739107410625",
            "extra": "mean: 5.242983756399963 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 1.112066660072671,
            "unit": "iter/sec",
            "range": "stddev: 0.000686927422082096",
            "extra": "mean: 899.2266704000031 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.00903951673368754,
            "unit": "iter/sec",
            "range": "stddev: 1.9723462975860984",
            "extra": "mean: 110.62538291160001 sec\nrounds: 5"
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
          "id": "1355207e90d0fcf920c97ff30b11419fdc724d92",
          "message": "Codex/issue 95 draw maps single polygon",
          "timestamp": "2026-03-29T07:21:38Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/148/commits/1355207e90d0fcf920c97ff30b11419fdc724d92"
        },
        "date": 1774781520145,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.41757836634907386,
            "unit": "iter/sec",
            "range": "stddev: 0.04448981682102099",
            "extra": "mean: 2.394760075199997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.059546363331322516,
            "unit": "iter/sec",
            "range": "stddev: 0.16047787135572017",
            "extra": "mean: 16.793636824400004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05906728145738314,
            "unit": "iter/sec",
            "range": "stddev: 0.10442181107039114",
            "extra": "mean: 16.929846360399996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.061290922128564115,
            "unit": "iter/sec",
            "range": "stddev: 0.06424067740140826",
            "extra": "mean: 16.31562987259998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.061312863801385585,
            "unit": "iter/sec",
            "range": "stddev: 0.04774960432184492",
            "extra": "mean: 16.30979109440002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.06127651666165684,
            "unit": "iter/sec",
            "range": "stddev: 0.05217920598705183",
            "extra": "mean: 16.319465506200025 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.34798793095061875,
            "unit": "iter/sec",
            "range": "stddev: 0.0058432800673191765",
            "extra": "mean: 2.873662880400025 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.1906552690628964,
            "unit": "iter/sec",
            "range": "stddev: 0.058313577681353035",
            "extra": "mean: 5.245068782599992 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 1.135444360996773,
            "unit": "iter/sec",
            "range": "stddev: 0.0010354711197834356",
            "extra": "mean: 880.7124631999841 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.009174709238937854,
            "unit": "iter/sec",
            "range": "stddev: 0.1098303325657627",
            "extra": "mean: 108.99527973660001 sec\nrounds: 5"
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
          "id": "a51bca19ebf0bd31972bd14963420778abc71ad5",
          "message": "Simplify bounded clipping workflows and apply axes clip box",
          "timestamp": "2026-03-29T07:21:38Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/147/commits/a51bca19ebf0bd31972bd14963420778abc71ad5"
        },
        "date": 1774781654653,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.4369365029546767,
            "unit": "iter/sec",
            "range": "stddev: 0.0516785362464723",
            "extra": "mean: 2.2886620669999957 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.0549302545825324,
            "unit": "iter/sec",
            "range": "stddev: 0.27024195965755204",
            "extra": "mean: 18.204903793000007 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05484801918925399,
            "unit": "iter/sec",
            "range": "stddev: 0.24984401577611237",
            "extra": "mean: 18.232198988800008 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.056427087200327686,
            "unit": "iter/sec",
            "range": "stddev: 0.032686602133127074",
            "extra": "mean: 17.721985124800007 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.05695893885143332,
            "unit": "iter/sec",
            "range": "stddev: 0.1846111839290844",
            "extra": "mean: 17.55650684799996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.057361624619814304,
            "unit": "iter/sec",
            "range": "stddev: 0.04659365091575823",
            "extra": "mean: 17.43325797739997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.35833784492684595,
            "unit": "iter/sec",
            "range": "stddev: 0.0388380477865963",
            "extra": "mean: 2.790662538599986 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.2058315274464142,
            "unit": "iter/sec",
            "range": "stddev: 0.011160885465939463",
            "extra": "mean: 4.858342219999986 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 1.3428343273652779,
            "unit": "iter/sec",
            "range": "stddev: 0.0036693910996016873",
            "extra": "mean: 744.6935036000013 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.009419506915608188,
            "unit": "iter/sec",
            "range": "stddev: 2.5263745904967214",
            "extra": "mean: 106.1626695494 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "clarmyleewt@outlook.com",
            "name": "Wentao Li",
            "username": "Clarmy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "94c6006db2cc1c3c500dc1c7fcaa512c83be43cc",
          "message": "Simplify bounded clipping workflows and apply axes clip box (#147)\n\n* Simplify bounded clipping workflows\n\n* Apply axes clip box to clipped artists\n\n* Refactor test output path for issue97 to use a dedicated temporary directory\n\n* Create tmp/issues before saving issue plots",
          "timestamp": "2026-03-29T18:56:56+08:00",
          "tree_id": "54638c5165bb2d7c6e55b5aea666c1af66d896b2",
          "url": "https://github.com/cnmetlab/cnmaps/commit/94c6006db2cc1c3c500dc1c7fcaa512c83be43cc"
        },
        "date": 1774783441941,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.38703685054146664,
            "unit": "iter/sec",
            "range": "stddev: 0.07577547885575114",
            "extra": "mean: 2.5837333024000033 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.05234879221718887,
            "unit": "iter/sec",
            "range": "stddev: 0.20180639229862782",
            "extra": "mean: 19.1026374754 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.053354977643084396,
            "unit": "iter/sec",
            "range": "stddev: 0.15014104234749595",
            "extra": "mean: 18.74239375919999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.054143661287266616,
            "unit": "iter/sec",
            "range": "stddev: 0.07793640060967724",
            "extra": "mean: 18.469382679800002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.05425558393420552,
            "unit": "iter/sec",
            "range": "stddev: 0.028539009322031406",
            "extra": "mean: 18.43128259780001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.05412271803684247,
            "unit": "iter/sec",
            "range": "stddev: 0.09517588837751456",
            "extra": "mean: 18.476529565999975 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.33037590487882507,
            "unit": "iter/sec",
            "range": "stddev: 0.021253774776068712",
            "extra": "mean: 3.0268551223999793 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.18249531704141467,
            "unit": "iter/sec",
            "range": "stddev: 0.02644107327409258",
            "extra": "mean: 5.479592661399988 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 1.1172425723621149,
            "unit": "iter/sec",
            "range": "stddev: 0.002169425766187005",
            "extra": "mean: 895.0607725999589 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.008921844529828218,
            "unit": "iter/sec",
            "range": "stddev: 0.22867065622743485",
            "extra": "mean: 112.08444584040001 sec\nrounds: 5"
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
          "id": "72903aee9b3827e2841ce251da72f536837dfc28",
          "message": "Codex/issue 95 draw maps single polygon",
          "timestamp": "2026-03-29T10:57:01Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/148/commits/72903aee9b3827e2841ce251da72f536837dfc28"
        },
        "date": 1774783800151,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.4244307012281847,
            "unit": "iter/sec",
            "range": "stddev: 0.06238079411222075",
            "extra": "mean: 2.356097231199999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.054031305473140646,
            "unit": "iter/sec",
            "range": "stddev: 0.13482214251788033",
            "extra": "mean: 18.507788979800004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05252121335691426,
            "unit": "iter/sec",
            "range": "stddev: 0.2508504223151498",
            "extra": "mean: 19.039925700200012 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.053061839198424846,
            "unit": "iter/sec",
            "range": "stddev: 0.07733494095189734",
            "extra": "mean: 18.84593551800001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.05361464549569106,
            "unit": "iter/sec",
            "range": "stddev: 0.12132965254317453",
            "extra": "mean: 18.6516201078 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.05485510024349115,
            "unit": "iter/sec",
            "range": "stddev: 0.11798050417114478",
            "extra": "mean: 18.229845457600003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.3444334183844494,
            "unit": "iter/sec",
            "range": "stddev: 0.08284965981634415",
            "extra": "mean: 2.9033187450000013 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.20325356744004075,
            "unit": "iter/sec",
            "range": "stddev: 0.01903162869531992",
            "extra": "mean: 4.919962845399982 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 1.3473313490291403,
            "unit": "iter/sec",
            "range": "stddev: 0.0007035940860675279",
            "extra": "mean: 742.2079214000178 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.008777868862505192,
            "unit": "iter/sec",
            "range": "stddev: 0.6324896087929475",
            "extra": "mean: 113.9228684848 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "clarmyleewt@outlook.com",
            "name": "Wentao Li",
            "username": "Clarmy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d48d113ae81af9f0f766f114434191be173f18e",
          "message": "Codex/issue 95 draw maps single polygon (#148)\n\n* Allow draw_maps to accept a single polygon\n\n* Store issue test artifacts under tmp/issues",
          "timestamp": "2026-03-29T19:00:15+08:00",
          "tree_id": "1b9454ffa5badb64cf4eab59772ff3c4ffd8af78",
          "url": "https://github.com/cnmetlab/cnmaps/commit/4d48d113ae81af9f0f766f114434191be173f18e"
        },
        "date": 1774783803838,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.40744644510785294,
            "unit": "iter/sec",
            "range": "stddev: 0.08177495634842886",
            "extra": "mean: 2.454310283000004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.057901174278936846,
            "unit": "iter/sec",
            "range": "stddev: 0.15206994279546804",
            "extra": "mean: 17.270806895600003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05837241376513873,
            "unit": "iter/sec",
            "range": "stddev: 0.10198601797114062",
            "extra": "mean: 17.13137997040002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.05872830593326339,
            "unit": "iter/sec",
            "range": "stddev: 0.08898849041214942",
            "extra": "mean: 17.02756420620002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.05807163158850372,
            "unit": "iter/sec",
            "range": "stddev: 0.2919706726788499",
            "extra": "mean: 17.22011200039999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.05976773264725555,
            "unit": "iter/sec",
            "range": "stddev: 0.09969446835400901",
            "extra": "mean: 16.7314361062 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.3379809500478161,
            "unit": "iter/sec",
            "range": "stddev: 0.06495345394932463",
            "extra": "mean: 2.9587466389999917 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.18748778351163642,
            "unit": "iter/sec",
            "range": "stddev: 0.03053791715256293",
            "extra": "mean: 5.333680847200026 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 1.1270913270303926,
            "unit": "iter/sec",
            "range": "stddev: 0.002023860241798948",
            "extra": "mean: 887.2395483999981 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.008979153714157856,
            "unit": "iter/sec",
            "range": "stddev: 0.3734666356057944",
            "extra": "mean: 111.36907016340001 sec\nrounds: 5"
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
          "id": "124001fb6d81bd4ae74f02728e30121247467144",
          "message": "Add regression tests for documentation examples",
          "timestamp": "2026-03-29T11:00:20Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/149/commits/124001fb6d81bd4ae74f02728e30121247467144"
        },
        "date": 1774786057912,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.40058505636558367,
            "unit": "iter/sec",
            "range": "stddev: 0.062322021750881834",
            "extra": "mean: 2.4963487381999983 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.05550193731452546,
            "unit": "iter/sec",
            "range": "stddev: 0.018125596062174527",
            "extra": "mean: 18.017389092799995 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05526716449684437,
            "unit": "iter/sec",
            "range": "stddev: 0.1363424879328915",
            "extra": "mean: 18.09392627799998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.05592101742904097,
            "unit": "iter/sec",
            "range": "stddev: 0.09944906189205423",
            "extra": "mean: 17.88236419819999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.056595821499520395,
            "unit": "iter/sec",
            "range": "stddev: 0.07664537491692763",
            "extra": "mean: 17.669148949600004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.055945128961927035,
            "unit": "iter/sec",
            "range": "stddev: 0.24066940246758678",
            "extra": "mean: 17.87465716060001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.326635836211699,
            "unit": "iter/sec",
            "range": "stddev: 0.05846271458156731",
            "extra": "mean: 3.0615134322000133 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.1825845544922623,
            "unit": "iter/sec",
            "range": "stddev: 0.03703421692688776",
            "extra": "mean: 5.47691453299999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 1.1089528271965268,
            "unit": "iter/sec",
            "range": "stddev: 0.0013858001980524288",
            "extra": "mean: 901.751612399994 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.008734027624644154,
            "unit": "iter/sec",
            "range": "stddev: 0.2927381652224035",
            "extra": "mean: 114.49471457800003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "clarmyleewt@outlook.com",
            "name": "Wentao Li",
            "username": "Clarmy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b1a0f7517427f7a53ac2670cb8475ffc6fdf3cef",
          "message": "Add regression tests for documentation examples (#149)",
          "timestamp": "2026-03-29T19:47:56+08:00",
          "tree_id": "711cbcd1bfd44c0ab53f31f6c9e5c8ba0cfa632d",
          "url": "https://github.com/cnmetlab/cnmaps/commit/b1a0f7517427f7a53ac2670cb8475ffc6fdf3cef"
        },
        "date": 1774786427057,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.40679804409645315,
            "unit": "iter/sec",
            "range": "stddev: 0.04660210777188416",
            "extra": "mean: 2.458222242000005 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.058063864052883885,
            "unit": "iter/sec",
            "range": "stddev: 0.07737747286187445",
            "extra": "mean: 17.222415633400004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05694127087566759,
            "unit": "iter/sec",
            "range": "stddev: 0.05922313825701532",
            "extra": "mean: 17.561954354399994 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.05816548928477042,
            "unit": "iter/sec",
            "range": "stddev: 0.13818375719828177",
            "extra": "mean: 17.192325076199985 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.05877413861071099,
            "unit": "iter/sec",
            "range": "stddev: 0.06535639895882951",
            "extra": "mean: 17.014285936600015 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.05915882785709186,
            "unit": "iter/sec",
            "range": "stddev: 0.08989807619958332",
            "extra": "mean: 16.903647963000026 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.3413906637408084,
            "unit": "iter/sec",
            "range": "stddev: 0.04695364588638894",
            "extra": "mean: 2.9291955118000033 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.18547480660991997,
            "unit": "iter/sec",
            "range": "stddev: 0.05021361297733238",
            "extra": "mean: 5.391567826800019 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 1.1126100183388457,
            "unit": "iter/sec",
            "range": "stddev: 0.0012502230982803597",
            "extra": "mean: 898.7875207999878 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.009018850374979397,
            "unit": "iter/sec",
            "range": "stddev: 0.1824047396953207",
            "extra": "mean: 110.8788768438 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}