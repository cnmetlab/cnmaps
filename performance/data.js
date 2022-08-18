window.BENCHMARK_DATA = {
  "lastUpdate": 1660817660207,
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
      }
    ]
  }
}