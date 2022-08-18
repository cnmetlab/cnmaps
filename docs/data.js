window.BENCHMARK_DATA = {
  "lastUpdate": 1660802599723,
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
          "id": "a29ebf31738b19f5d7f680e93b11e1458e91d880",
          "message": "chore: fix benchmark path.",
          "timestamp": "2022-08-18T12:26:37+08:00",
          "tree_id": "976dd3470949c5640fe9dd5c8953e4a1eecb748b",
          "url": "https://github.com/cnmetlab/cnmaps/commit/a29ebf31738b19f5d7f680e93b11e1458e91d880"
        },
        "date": 1660802595413,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_drawing.py::test_draw_maps",
            "value": 0.041999099498231635,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.810034309000002 sec\nrounds: 1"
          },
          {
            "name": "tests/test_drawing.py::test_clip_scatter",
            "value": 0.01618016684751047,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 61.804059835999965 sec\nrounds: 1"
          },
          {
            "name": "tests/test_drawing.py::test_clip_pcolormesh",
            "value": 0.015905767675297847,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 62.87027576500009 sec\nrounds: 1"
          },
          {
            "name": "tests/test_drawing.py::test_clip_contour",
            "value": 0.01698926555951581,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 58.86069627300003 sec\nrounds: 1"
          },
          {
            "name": "tests/test_drawing.py::test_clip_contourf",
            "value": 0.01727047443554942,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 57.90228888799993 sec\nrounds: 1"
          },
          {
            "name": "tests/test_drawing.py::test_clip_quiver",
            "value": 0.017593147101661967,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 56.840313686999934 sec\nrounds: 1"
          },
          {
            "name": "tests/test_drawing.py::test_clip_clabel",
            "value": 0.017378892559769436,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 57.541065781999805 sec\nrounds: 1"
          },
          {
            "name": "tests/test_drawing.py::test_projection",
            "value": 0.028508510367242793,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.077244904000054 sec\nrounds: 1"
          }
        ]
      }
    ]
  }
}