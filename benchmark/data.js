window.BENCHMARK_DATA = {
  "lastUpdate": 1660790491010,
  "repoUrl": "https://github.com/cnmetlab/cnmaps",
  "entries": {
    "cnmaps Benchmark": [
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
          "id": "15db2d1141e5e6c2a554d7c612f046cc880238df",
          "message": "feat: add simplify.",
          "timestamp": "2022-08-16T10:22:02Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/75/commits/15db2d1141e5e6c2a554d7c612f046cc880238df"
        },
        "date": 1660790484867,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_drawing.py::test_draw_maps",
            "value": 0.029123416459429636,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.33663084799991 sec\nrounds: 1"
          },
          {
            "name": "tests/test_drawing.py::test_clip_scatter",
            "value": 0.012111401199047337,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.56682968099994 sec\nrounds: 1"
          },
          {
            "name": "tests/test_drawing.py::test_clip_pcolormesh",
            "value": 0.012370507049296015,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 80.83743018900009 sec\nrounds: 1"
          },
          {
            "name": "tests/test_drawing.py::test_clip_contour",
            "value": 0.012951515213068287,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 77.211043152 sec\nrounds: 1"
          },
          {
            "name": "tests/test_drawing.py::test_clip_contourf",
            "value": 0.012885784876668858,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 77.60489637 sec\nrounds: 1"
          },
          {
            "name": "tests/test_drawing.py::test_clip_quiver",
            "value": 0.013320924247131518,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 75.06986613300023 sec\nrounds: 1"
          },
          {
            "name": "tests/test_drawing.py::test_clip_clabel",
            "value": 0.011363395357384228,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 88.00186639200001 sec\nrounds: 1"
          },
          {
            "name": "tests/test_drawing.py::test_projection",
            "value": 0.019618873648543533,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 50.97132577100001 sec\nrounds: 1"
          }
        ]
      }
    ]
  }
}