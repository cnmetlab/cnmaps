window.BENCHMARK_DATA = {
  "lastUpdate": 1660823768105,
  "repoUrl": "https://github.com/cnmetlab/cnmaps",
  "entries": {
    "cnmaps Benchmark": [
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
          "id": "e5a9685cb31a02dd20ada306d29c3edcaf3fe1e8",
          "message": "chore: path use performance",
          "timestamp": "2022-08-18T16:48:48+08:00",
          "tree_id": "6dce028d2672f6c42d29645caca5009e606ed22e",
          "url": "https://github.com/cnmetlab/cnmaps/commit/e5a9685cb31a02dd20ada306d29c3edcaf3fe1e8"
        },
        "date": 1660817654890,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_drawing.py::test_draw_maps",
            "value": 0.04761495697047939,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.00180413099997 sec\nrounds: 1"
          },
          {
            "name": "tests/test_drawing.py::test_clip_scatter",
            "value": 0.018791641478283876,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 53.215148935 sec\nrounds: 1"
          },
          {
            "name": "tests/test_drawing.py::test_clip_pcolormesh",
            "value": 0.01863481184532799,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 53.66300493400013 sec\nrounds: 1"
          },
          {
            "name": "tests/test_drawing.py::test_clip_contour",
            "value": 0.01965472573104831,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 50.87834924200001 sec\nrounds: 1"
          },
          {
            "name": "tests/test_drawing.py::test_clip_contourf",
            "value": 0.019922518733919415,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 50.194456502000094 sec\nrounds: 1"
          },
          {
            "name": "tests/test_drawing.py::test_clip_quiver",
            "value": 0.02041601465872991,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 48.98115605399994 sec\nrounds: 1"
          },
          {
            "name": "tests/test_drawing.py::test_clip_clabel",
            "value": 0.017722991437923576,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 56.42388326500031 sec\nrounds: 1"
          },
          {
            "name": "tests/test_drawing.py::test_projection",
            "value": 0.030609891975845554,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.66917768900021 sec\nrounds: 1"
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
          "id": "8c6fed2c2ce06415772fff0a22716175b1761c4e",
          "message": "tests: simplify tests and add test_perf",
          "timestamp": "2022-08-16T10:22:02Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/76/commits/8c6fed2c2ce06415772fff0a22716175b1761c4e"
        },
        "date": 1660823764318,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_draw_maps",
            "value": 0.2550509686165854,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.920784953000066 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_scatter",
            "value": 0.0527715349824412,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.949609866999936 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_pcolormesh",
            "value": 0.05189345685582973,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.270252177999964 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_contour",
            "value": 0.05150106182937369,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.41707538600008 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf",
            "value": 0.051636863871317884,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.36600957199994 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_quiver",
            "value": 0.05180786941298124,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.302086948000124 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_clip_clabel",
            "value": 0.13017339364190592,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.682061379999823 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_projection",
            "value": 0.10700255334275631,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.345571379000148 sec\nrounds: 1"
          },
          {
            "name": "tests/test_perf.py::test_maskout",
            "value": 1.4857849751184729,
            "unit": "iter/sec",
            "range": "stddev: 0.07240787722900074",
            "extra": "mean: 673.0448999999226 msec\nrounds: 2"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array",
            "value": 0.18546348949944177,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.391896824000014 sec\nrounds: 1"
          }
        ]
      }
    ]
  }
}