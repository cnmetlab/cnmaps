window.BENCHMARK_DATA = {
  "lastUpdate": 1774968816298,
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
          "id": "a80f8dd8acc806a1a92924d03bfaad65d5dc8e8f",
          "message": "Optimize maskout performance",
          "timestamp": "2026-03-31T07:14:24Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/158/commits/a80f8dd8acc806a1a92924d03bfaad65d5dc8e8f"
        },
        "date": 1774968700430,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 70.2133409897845,
            "unit": "iter/sec",
            "range": "stddev: 0.0004081397161452719",
            "extra": "mean: 14.242307599997162 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 343.3376122583815,
            "unit": "iter/sec",
            "range": "stddev: 0.00005684302124708458",
            "extra": "mean: 2.912585060000481 msec\nrounds: 50"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 373.08913074433246,
            "unit": "iter/sec",
            "range": "stddev: 0.00006641643041548417",
            "extra": "mean: 2.6803246666686515 msec\nrounds: 9"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 2.4130701597769724,
            "unit": "iter/sec",
            "range": "stddev: 0.05801557124821609",
            "extra": "mean: 414.4098321999991 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.14109768718269355,
            "unit": "iter/sec",
            "range": "stddev: 0.13289364682502974",
            "extra": "mean: 7.087288388400003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 1.157345226088201,
            "unit": "iter/sec",
            "range": "stddev: 0.0007984502883706341",
            "extra": "mean: 864.0464205999933 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 0.008908663191133679,
            "unit": "iter/sec",
            "range": "stddev: 0.12203371959829554",
            "extra": "mean: 112.25028700099999 sec\nrounds: 5"
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
          "id": "e6496a5d5aebcd7d1be6a0b641df87c303450152",
          "message": "Optimize maskout performance",
          "timestamp": "2026-03-31T07:14:24Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/158/commits/e6496a5d5aebcd7d1be6a0b641df87c303450152"
        },
        "date": 1774968812852,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 68.55356891729814,
            "unit": "iter/sec",
            "range": "stddev: 0.000349385068774636",
            "extra": "mean: 14.58713260000195 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 360.99023954605485,
            "unit": "iter/sec",
            "range": "stddev: 0.000039709345327445616",
            "extra": "mean: 2.770157999998836 msec\nrounds: 51"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 386.694674102263,
            "unit": "iter/sec",
            "range": "stddev: 0.00005681653279241491",
            "extra": "mean: 2.586019583335523 msec\nrounds: 12"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 2.557142095443297,
            "unit": "iter/sec",
            "range": "stddev: 0.04369385803004803",
            "extra": "mean: 391.0615689999986 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.15408231064547842,
            "unit": "iter/sec",
            "range": "stddev: 0.07805348209393516",
            "extra": "mean: 6.490037667600004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 1.1569986756636894,
            "unit": "iter/sec",
            "range": "stddev: 0.0015392246014588526",
            "extra": "mean: 864.3052243999932 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 0.009152409237148797,
            "unit": "iter/sec",
            "range": "stddev: 0.5566321482050859",
            "extra": "mean: 109.26084860159999 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}