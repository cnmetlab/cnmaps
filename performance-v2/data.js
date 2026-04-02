window.BENCHMARK_DATA = {
  "lastUpdate": 1775126978894,
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
          "id": "df69e15b809b1115f2d85f462b1ad0eca78d19c2",
          "message": "Optimize maskout performance",
          "timestamp": "2026-03-31T07:14:24Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/158/commits/df69e15b809b1115f2d85f462b1ad0eca78d19c2"
        },
        "date": 1774972548255,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 66.5903177598117,
            "unit": "iter/sec",
            "range": "stddev: 0.00019849584819298222",
            "extra": "mean: 15.017198199998916 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 353.2308531976266,
            "unit": "iter/sec",
            "range": "stddev: 0.000037647550659184037",
            "extra": "mean: 2.8310097799993628 msec\nrounds: 50"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 379.9500956274285,
            "unit": "iter/sec",
            "range": "stddev: 0.000042645007000205",
            "extra": "mean: 2.631924590908855 msec\nrounds: 44"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 2.614244267877871,
            "unit": "iter/sec",
            "range": "stddev: 0.03633911583895334",
            "extra": "mean: 382.5197255999939 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.15537697009938284,
            "unit": "iter/sec",
            "range": "stddev: 0.10310575043271403",
            "extra": "mean: 6.435960228600004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 1.1661787743575884,
            "unit": "iter/sec",
            "range": "stddev: 0.0012042015640162565",
            "extra": "mean: 857.5014586000066 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 0.009316966814890044,
            "unit": "iter/sec",
            "range": "stddev: 0.7758004454587943",
            "extra": "mean: 107.33106813280001 sec\nrounds: 5"
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
          "id": "9e04c19f843bc9a1eefea5ab0df5e621a3cdbe91",
          "message": "Optimize maskout performance",
          "timestamp": "2026-03-31T07:14:24Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/158/commits/9e04c19f843bc9a1eefea5ab0df5e621a3cdbe91"
        },
        "date": 1774979814456,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 68.85732481359904,
            "unit": "iter/sec",
            "range": "stddev: 0.00006683983967070267",
            "extra": "mean: 14.522783200001754 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 388.65058089245446,
            "unit": "iter/sec",
            "range": "stddev: 0.000030798141262742774",
            "extra": "mean: 2.573005288461707 msec\nrounds: 52"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 417.8677928147653,
            "unit": "iter/sec",
            "range": "stddev: 0.00005121794706663862",
            "extra": "mean: 2.3931014000001802 msec\nrounds: 45"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 3.275703975923648,
            "unit": "iter/sec",
            "range": "stddev: 0.03553310757367702",
            "extra": "mean: 305.2778905999986 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.1501676424933744,
            "unit": "iter/sec",
            "range": "stddev: 0.09824915962195768",
            "extra": "mean: 6.659224206999997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 7206.739742526793,
            "unit": "iter/sec",
            "range": "stddev: 0.000012974041738123218",
            "extra": "mean: 138.75900000925867 usec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 30677.669723663603,
            "unit": "iter/sec",
            "range": "stddev: 0.000009415102826230405",
            "extra": "mean: 32.59700000057819 usec\nrounds: 5"
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
          "id": "db17107394d450ff3f901a20fb564bad3432d177",
          "message": "Optimize maskout performance (#158)\n\n* Optimize maskout performance\n\n* Unify country-level test queries\n\n* Speed up first country-level queries\n\n* Make perf benchmarks measure core paths\n\n* Remove coastlines from clip clabel test\n\n* Reset benchmark series with stable workloads\n\n* Point benchmark badges to performance-v2\n\n* Add benchmark sanity logging\n\n* Fix benchmark sanity mask assertions\n\n* Lighten benchmark sanity check\n\n* Cache repeated mask array calculations",
          "timestamp": "2026-04-01T11:35:34+08:00",
          "tree_id": "772a4e531e31ed6a670d84bdd3e11375a2dbcfdb",
          "url": "https://github.com/cnmetlab/cnmaps/commit/db17107394d450ff3f901a20fb564bad3432d177"
        },
        "date": 1775014754588,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 66.5357987348877,
            "unit": "iter/sec",
            "range": "stddev: 0.00007332242348956121",
            "extra": "mean: 15.029503199991723 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 357.3783209551416,
            "unit": "iter/sec",
            "range": "stddev: 0.00004589247863425967",
            "extra": "mean: 2.798155179999071 msec\nrounds: 50"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 386.6366551928126,
            "unit": "iter/sec",
            "range": "stddev: 0.0000509293830713812",
            "extra": "mean: 2.5864076428586626 msec\nrounds: 42"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 2.5494552767569596,
            "unit": "iter/sec",
            "range": "stddev: 0.04066932298126831",
            "extra": "mean: 392.2406520000038 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.1528459323785209,
            "unit": "iter/sec",
            "range": "stddev: 0.10818066770429798",
            "extra": "mean: 6.542535901600007 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 5861.520408170355,
            "unit": "iter/sec",
            "range": "stddev: 0.00001649366840650866",
            "extra": "mean: 170.6041999966601 usec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 29005.34857392682,
            "unit": "iter/sec",
            "range": "stddev: 0.000008918104342559144",
            "extra": "mean: 34.47640001468244 usec\nrounds: 5"
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
          "id": "f755eac7a9fc0962aec9843985bf9e510bccdfd3",
          "message": "Finalize 2.0.1 changelog",
          "timestamp": "2026-04-01T11:40:36+08:00",
          "tree_id": "8e851002ddae6aa57e915e594132affdefe76aa9",
          "url": "https://github.com/cnmetlab/cnmaps/commit/f755eac7a9fc0962aec9843985bf9e510bccdfd3"
        },
        "date": 1775015058253,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 73.56949848612851,
            "unit": "iter/sec",
            "range": "stddev: 0.00033048275242756963",
            "extra": "mean: 13.59258960000318 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 350.3179724133733,
            "unit": "iter/sec",
            "range": "stddev: 0.00006477947102113004",
            "extra": "mean: 2.8545495200000914 msec\nrounds: 50"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 381.50057218743945,
            "unit": "iter/sec",
            "range": "stddev: 0.00006764337546623046",
            "extra": "mean: 2.6212280476179166 msec\nrounds: 42"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 2.560112163224509,
            "unit": "iter/sec",
            "range": "stddev: 0.04259291756699961",
            "extra": "mean: 390.6078859999951 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.15868035023766205,
            "unit": "iter/sec",
            "range": "stddev: 0.03807408238050076",
            "extra": "mean: 6.301977519599996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 5642.334662395059,
            "unit": "iter/sec",
            "range": "stddev: 0.000023626072241112368",
            "extra": "mean: 177.23160000855387 usec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 28912.764401576194,
            "unit": "iter/sec",
            "range": "stddev: 0.000009288305585060408",
            "extra": "mean: 34.58680000676395 usec\nrounds: 5"
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
          "id": "df73ae2156d765a53dc63707a18318932dd47086",
          "message": "Split 2.0.0 and 2.0.1 changelog entries",
          "timestamp": "2026-04-01T11:42:43+08:00",
          "tree_id": "23867b0c851c0a7a81c90823359e6bd9b66fee25",
          "url": "https://github.com/cnmetlab/cnmaps/commit/df73ae2156d765a53dc63707a18318932dd47086"
        },
        "date": 1775015242056,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 77.43957386178838,
            "unit": "iter/sec",
            "range": "stddev: 0.00011255993071212292",
            "extra": "mean: 12.913294200001246 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 360.6914931186854,
            "unit": "iter/sec",
            "range": "stddev: 0.000030821446191992325",
            "extra": "mean: 2.772452411764949 msec\nrounds: 51"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 390.64296550751646,
            "unit": "iter/sec",
            "range": "stddev: 0.00003122655481096551",
            "extra": "mean: 2.559882266664696 msec\nrounds: 45"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 2.62567544365183,
            "unit": "iter/sec",
            "range": "stddev: 0.03491635562250063",
            "extra": "mean: 380.85438260000046 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.16425613049395218,
            "unit": "iter/sec",
            "range": "stddev: 0.05160197504676787",
            "extra": "mean: 6.088052829399993 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 5764.632366566895,
            "unit": "iter/sec",
            "range": "stddev: 0.000015087689778944239",
            "extra": "mean: 173.47159999303585 usec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 24757.745467441495,
            "unit": "iter/sec",
            "range": "stddev: 0.000010923683151046254",
            "extra": "mean: 40.39139998894825 usec\nrounds: 5"
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
          "id": "e0efb00bd6e4a03c740546989ed12fdec4623c5b",
          "message": "Document cnmaps-data minimum version",
          "timestamp": "2026-04-01T11:46:29+08:00",
          "tree_id": "7c0aa5d45b4974316e5bc9a6d78c658adf450470",
          "url": "https://github.com/cnmetlab/cnmaps/commit/e0efb00bd6e4a03c740546989ed12fdec4623c5b"
        },
        "date": 1775015450444,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 69.88361052388909,
            "unit": "iter/sec",
            "range": "stddev: 0.00011519497602012846",
            "extra": "mean: 14.309506799997962 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 356.60108584878304,
            "unit": "iter/sec",
            "range": "stddev: 0.00004398846177117144",
            "extra": "mean: 2.8042539400007627 msec\nrounds: 50"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 383.45776062025976,
            "unit": "iter/sec",
            "range": "stddev: 0.00005590485802287348",
            "extra": "mean: 2.60784916279294 msec\nrounds: 43"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 2.5946515564248007,
            "unit": "iter/sec",
            "range": "stddev: 0.03771741276863956",
            "extra": "mean: 385.40820540000027 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.158624217829942,
            "unit": "iter/sec",
            "range": "stddev: 0.07518905032913915",
            "extra": "mean: 6.304207602600007 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 5568.933370964152,
            "unit": "iter/sec",
            "range": "stddev: 0.000025261979225906908",
            "extra": "mean: 179.5676000028834 usec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 29015.784588478415,
            "unit": "iter/sec",
            "range": "stddev: 0.000008847540232232364",
            "extra": "mean: 34.46399999802452 usec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1be30f37163c3ea9603df7f8db6c81ca0110098f",
          "message": "chore(deps): bump numpy from 1.26.4 to 2.0.2 (#157)\n\nBumps [numpy](https://github.com/numpy/numpy) from 1.26.4 to 2.0.2.\n- [Release notes](https://github.com/numpy/numpy/releases)\n- [Changelog](https://github.com/numpy/numpy/blob/main/doc/RELEASE_WALKTHROUGH.rst)\n- [Commits](https://github.com/numpy/numpy/compare/v1.26.4...v2.0.2)\n\n---\nupdated-dependencies:\n- dependency-name: numpy\n  dependency-version: 2.0.2\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-04-01T11:58:29+08:00",
          "tree_id": "10c80e920250a3b62d590872cdc7a36b109220ab",
          "url": "https://github.com/cnmetlab/cnmaps/commit/1be30f37163c3ea9603df7f8db6c81ca0110098f"
        },
        "date": 1775016132413,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 73.51478016126747,
            "unit": "iter/sec",
            "range": "stddev: 0.00015677533176841144",
            "extra": "mean: 13.602706799997577 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 360.6717524116564,
            "unit": "iter/sec",
            "range": "stddev: 0.0000376217826490515",
            "extra": "mean: 2.77260415686405 msec\nrounds: 51"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 389.89286783703295,
            "unit": "iter/sec",
            "range": "stddev: 0.00006660164564671114",
            "extra": "mean: 2.564807111111299 msec\nrounds: 45"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 3.0761330445580306,
            "unit": "iter/sec",
            "range": "stddev: 0.03344557530823497",
            "extra": "mean: 325.08346859999904 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.16332260711120317,
            "unit": "iter/sec",
            "range": "stddev: 0.11161169738498447",
            "extra": "mean: 6.122851071799997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 5792.004485143876,
            "unit": "iter/sec",
            "range": "stddev: 0.000026969428365136015",
            "extra": "mean: 172.65180000549663 usec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 28796.203505099154,
            "unit": "iter/sec",
            "range": "stddev: 0.00000780356323251405",
            "extra": "mean: 34.72680000413675 usec\nrounds: 5"
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
          "id": "9b4fa018d364b83b8408bdd52a0345796317907a",
          "message": "Add documentation for centroid coordinates of administrative areas",
          "timestamp": "2026-04-01T03:58:34Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/160/commits/9b4fa018d364b83b8408bdd52a0345796317907a"
        },
        "date": 1775021363890,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 55.09078520675772,
            "unit": "iter/sec",
            "range": "stddev: 0.00011669340803445334",
            "extra": "mean: 18.151856000000066 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 262.58284535669986,
            "unit": "iter/sec",
            "range": "stddev: 0.00003374036213617969",
            "extra": "mean: 3.8083218979578506 msec\nrounds: 49"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 297.84214314965027,
            "unit": "iter/sec",
            "range": "stddev: 0.00003386469850573614",
            "extra": "mean: 3.3574832272730184 msec\nrounds: 44"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 3.100361671884732,
            "unit": "iter/sec",
            "range": "stddev: 0.03398664357377124",
            "extra": "mean: 322.5430146000008 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.16218401814532116,
            "unit": "iter/sec",
            "range": "stddev: 0.14518976934700392",
            "extra": "mean: 6.165835644199996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 5722.205246277498,
            "unit": "iter/sec",
            "range": "stddev: 0.000014105136907498703",
            "extra": "mean: 174.75780000211216 usec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 23156.29573035856,
            "unit": "iter/sec",
            "range": "stddev: 0.000011726037571535929",
            "extra": "mean: 43.18480000620184 usec\nrounds: 5"
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
          "id": "3505e168d2895d9d8beec1cc9241603935d3d408",
          "message": "Add documentation for centroid coordinates of administrative areas",
          "timestamp": "2026-04-01T03:58:34Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/160/commits/3505e168d2895d9d8beec1cc9241603935d3d408"
        },
        "date": 1775021473739,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 55.9429787091916,
            "unit": "iter/sec",
            "range": "stddev: 0.0003074049717518491",
            "extra": "mean: 17.87534419999872 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 320.6481848794566,
            "unit": "iter/sec",
            "range": "stddev: 0.00004890941998830121",
            "extra": "mean: 3.1186828653838683 msec\nrounds: 52"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 347.69693282399743,
            "unit": "iter/sec",
            "range": "stddev: 0.00004937390090971745",
            "extra": "mean: 2.8760679361707093 msec\nrounds: 47"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 3.6092016248943835,
            "unit": "iter/sec",
            "range": "stddev: 0.03155365088363552",
            "extra": "mean: 277.0695859999961 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.14669615017099535,
            "unit": "iter/sec",
            "range": "stddev: 0.03749480007255676",
            "extra": "mean: 6.816811476200002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 6794.669174190097,
            "unit": "iter/sec",
            "range": "stddev: 0.000015909945163838972",
            "extra": "mean: 147.17420000351922 usec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 33038.62876586647,
            "unit": "iter/sec",
            "range": "stddev: 0.000008802227148085436",
            "extra": "mean: 30.267599998978767 usec\nrounds: 5"
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
          "id": "22cf78d52d2914844e511d85fa6aa898fe704f86",
          "message": "Add documentation for centroid coordinates of administrative areas",
          "timestamp": "2026-04-01T03:58:34Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/160/commits/22cf78d52d2914844e511d85fa6aa898fe704f86"
        },
        "date": 1775031051154,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 51.19683087521549,
            "unit": "iter/sec",
            "range": "stddev: 0.00025335211114649596",
            "extra": "mean: 19.532458999998425 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 210.6017475338364,
            "unit": "iter/sec",
            "range": "stddev: 0.00007353075597528489",
            "extra": "mean: 4.7482986808518035 msec\nrounds: 47"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 226.09280179305094,
            "unit": "iter/sec",
            "range": "stddev: 0.00005337826215176598",
            "extra": "mean: 4.422962571428205 msec\nrounds: 42"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 3.8638331894066225,
            "unit": "iter/sec",
            "range": "stddev: 0.03676971638081602",
            "extra": "mean: 258.810344799997 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.14861150888137323,
            "unit": "iter/sec",
            "range": "stddev: 0.08574836902836322",
            "extra": "mean: 6.728953952000003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 7199.123434578689,
            "unit": "iter/sec",
            "range": "stddev: 0.000014831403989112519",
            "extra": "mean: 138.90580000293085 usec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 33405.712379327975,
            "unit": "iter/sec",
            "range": "stddev: 0.000009022639897317169",
            "extra": "mean: 29.9349999977494 usec\nrounds: 5"
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
          "id": "2748b5eab97198e37d64713f5fd36393524711d0",
          "message": "Add centroid coordinates for administrative areas (#11)",
          "timestamp": "2026-04-01T03:58:34Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/160/commits/2748b5eab97198e37d64713f5fd36393524711d0"
        },
        "date": 1775033662243,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 44.11907859317662,
            "unit": "iter/sec",
            "range": "stddev: 0.0027169781576804985",
            "extra": "mean: 22.66593119999243 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 175.57557133910598,
            "unit": "iter/sec",
            "range": "stddev: 0.0002750199896537269",
            "extra": "mean: 5.695553159092981 msec\nrounds: 44"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 192.66837769997926,
            "unit": "iter/sec",
            "range": "stddev: 0.0001942464630268372",
            "extra": "mean: 5.190265324998933 msec\nrounds: 40"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 3.061922865660831,
            "unit": "iter/sec",
            "range": "stddev: 0.037065298812490106",
            "extra": "mean: 326.5921591999927 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.1617913974695431,
            "unit": "iter/sec",
            "range": "stddev: 0.04736862069450925",
            "extra": "mean: 6.180798334399998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 5758.060132873819,
            "unit": "iter/sec",
            "range": "stddev: 0.000014493769562483564",
            "extra": "mean: 173.66959999094433 usec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 26732.535637520545,
            "unit": "iter/sec",
            "range": "stddev: 0.000010459672893558057",
            "extra": "mean: 37.40759999573129 usec\nrounds: 5"
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
          "id": "775f8a741862af86f3c24e3703585989e3e704b4",
          "message": "Add centroid coordinates for administrative areas (#11) (#160)\n\n* Add centroid coordinates for administrative areas (#11)\n\n* Document centroid coordinate examples (#11)\n\n* Add province and country centroid docs examples (#11)\n\n* Add labeled province capital centroid example (#11)\n\n* Refine centroid docs and examples (#11)\n\n* Refresh README and docs examples",
          "timestamp": "2026-04-01T17:11:33+08:00",
          "tree_id": "586db10c42a307b883b118aa98f4e015c9814658",
          "url": "https://github.com/cnmetlab/cnmaps/commit/775f8a741862af86f3c24e3703585989e3e704b4"
        },
        "date": 1775034908348,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 47.669052909544114,
            "unit": "iter/sec",
            "range": "stddev: 0.00010725017049305535",
            "extra": "mean: 20.977970799998502 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 180.15209015935227,
            "unit": "iter/sec",
            "range": "stddev: 0.00005056547508877935",
            "extra": "mean: 5.5508653777786146 msec\nrounds: 45"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 196.89251726573144,
            "unit": "iter/sec",
            "range": "stddev: 0.00007731070404878794",
            "extra": "mean: 5.078913175000821 msec\nrounds: 40"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 3.0290041052262238,
            "unit": "iter/sec",
            "range": "stddev: 0.03393586389255059",
            "extra": "mean: 330.1415136000003 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.1670097365811651,
            "unit": "iter/sec",
            "range": "stddev: 0.02950716605996697",
            "extra": "mean: 5.987674853399997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 5619.707640349133,
            "unit": "iter/sec",
            "range": "stddev: 0.000016010397161878225",
            "extra": "mean: 177.9451999993853 usec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 27450.20532854914,
            "unit": "iter/sec",
            "range": "stddev: 0.000009168623354293204",
            "extra": "mean: 36.42959999865525 usec\nrounds: 5"
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
          "id": "134003437d665fc14e470e1b2410e2d3dbaa5416",
          "message": "Audit and refresh documentation pages",
          "timestamp": "2026-04-01T09:13:35Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/161/commits/134003437d665fc14e470e1b2410e2d3dbaa5416"
        },
        "date": 1775041053700,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 50.647296250310866,
            "unit": "iter/sec",
            "range": "stddev: 0.00016466400849544187",
            "extra": "mean: 19.74439059999895 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 222.01672929362698,
            "unit": "iter/sec",
            "range": "stddev: 0.00005273935144602068",
            "extra": "mean: 4.504165083332327 msec\nrounds: 48"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 237.50904709240322,
            "unit": "iter/sec",
            "range": "stddev: 0.00008348578415075216",
            "extra": "mean: 4.21036593023317 msec\nrounds: 43"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 3.5129848713848006,
            "unit": "iter/sec",
            "range": "stddev: 0.0346692277355749",
            "extra": "mean: 284.658214199996 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.14253146497133523,
            "unit": "iter/sec",
            "range": "stddev: 0.07031790453072483",
            "extra": "mean: 7.015994680199995 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 5395.669867049079,
            "unit": "iter/sec",
            "range": "stddev: 0.00004841866548307974",
            "extra": "mean: 185.3337999989435 usec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 32060.53028767854,
            "unit": "iter/sec",
            "range": "stddev: 0.000008625562737916915",
            "extra": "mean: 31.190999993668807 usec\nrounds: 5"
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
          "id": "7b9521350af818a87642480552824678df13822f",
          "message": "Audit and refresh documentation pages (#161)",
          "timestamp": "2026-04-01T18:58:01+08:00",
          "tree_id": "ee82d166d4388e306068b6364b60ccd1be6d3a4b",
          "url": "https://github.com/cnmetlab/cnmaps/commit/7b9521350af818a87642480552824678df13822f"
        },
        "date": 1775041294603,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 47.39433258192209,
            "unit": "iter/sec",
            "range": "stddev: 0.00010303287358517374",
            "extra": "mean: 21.099569199998314 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 181.9353877590669,
            "unit": "iter/sec",
            "range": "stddev: 0.00006287353955066568",
            "extra": "mean: 5.4964568043479165 msec\nrounds: 46"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 199.8186212259922,
            "unit": "iter/sec",
            "range": "stddev: 0.000046080062874091295",
            "extra": "mean: 5.0045385853654425 msec\nrounds: 41"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 3.079991508512746,
            "unit": "iter/sec",
            "range": "stddev: 0.03378392670879599",
            "extra": "mean: 324.6762197999942 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.16965414532287032,
            "unit": "iter/sec",
            "range": "stddev: 0.03317788781057023",
            "extra": "mean: 5.894344627400002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 5298.176049920177,
            "unit": "iter/sec",
            "range": "stddev: 0.00003476415684567868",
            "extra": "mean: 188.74419999974634 usec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 28524.48542155381,
            "unit": "iter/sec",
            "range": "stddev: 0.000008406454237924029",
            "extra": "mean: 35.05759999598013 usec\nrounds: 5"
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
          "id": "f28482a3b021d0722b17d8a77f956a0370b8d1a9",
          "message": "Add cnmaps AI skill definition [skip ci]",
          "timestamp": "2026-04-01T10:58:05Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/163/commits/f28482a3b021d0722b17d8a77f956a0370b8d1a9"
        },
        "date": 1775061771868,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 50.599829096031506,
            "unit": "iter/sec",
            "range": "stddev: 0.00009457006124944559",
            "extra": "mean: 19.7629126000038 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 183.15780232810292,
            "unit": "iter/sec",
            "range": "stddev: 0.00005226721013767875",
            "extra": "mean: 5.459772869564315 msec\nrounds: 46"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 200.70675014786883,
            "unit": "iter/sec",
            "range": "stddev: 0.00006761815460693647",
            "extra": "mean: 4.982393463414954 msec\nrounds: 41"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 3.0672767407306942,
            "unit": "iter/sec",
            "range": "stddev: 0.030622120271698493",
            "extra": "mean: 326.0220986000036 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.17102655201367328,
            "unit": "iter/sec",
            "range": "stddev: 0.08256904482290087",
            "extra": "mean: 5.847045316800001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 5635.110797582454,
            "unit": "iter/sec",
            "range": "stddev: 0.000014972523766911381",
            "extra": "mean: 177.45879999893077 usec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 28773.004032545552,
            "unit": "iter/sec",
            "range": "stddev: 0.000008734057713945005",
            "extra": "mean: 34.75479998087394 usec\nrounds: 5"
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
          "id": "46cd62ba904207cccaead936d8a028ff85d8f7c3",
          "message": "Add cnmaps AI skill definition [skip ci]",
          "timestamp": "2026-04-01T10:58:05Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/163/commits/46cd62ba904207cccaead936d8a028ff85d8f7c3"
        },
        "date": 1775062769270,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 48.2128438919695,
            "unit": "iter/sec",
            "range": "stddev: 0.0002845755646795491",
            "extra": "mean: 20.741361000000325 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 176.73363191002082,
            "unit": "iter/sec",
            "range": "stddev: 0.0002834665428532484",
            "extra": "mean: 5.658232613638151 msec\nrounds: 44"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 197.0774216780769,
            "unit": "iter/sec",
            "range": "stddev: 0.00007570703931191543",
            "extra": "mean: 5.07414797436048 msec\nrounds: 39"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 3.019575220712369,
            "unit": "iter/sec",
            "range": "stddev: 0.03601237719966256",
            "extra": "mean: 331.17240899999274 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.15627935843515914,
            "unit": "iter/sec",
            "range": "stddev: 0.08068825851399031",
            "extra": "mean: 6.3987977043999935 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 5618.962424697626,
            "unit": "iter/sec",
            "range": "stddev: 0.000013027948323707574",
            "extra": "mean: 177.96880000560122 usec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 27556.256089925366,
            "unit": "iter/sec",
            "range": "stddev: 0.000008146226638842525",
            "extra": "mean: 36.289400009081874 usec\nrounds: 5"
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
          "id": "da492bfad3ab16c8a385af9944ed3220cf146956",
          "message": "Add cnmaps AI skill definition [skip ci]",
          "timestamp": "2026-04-01T10:58:05Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/163/commits/da492bfad3ab16c8a385af9944ed3220cf146956"
        },
        "date": 1775101358886,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 44.38646585637754,
            "unit": "iter/sec",
            "range": "stddev: 0.00017984435031404567",
            "extra": "mean: 22.529389999999694 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 175.32201101553508,
            "unit": "iter/sec",
            "range": "stddev: 0.00006361620185820776",
            "extra": "mean: 5.703790380954456 msec\nrounds: 42"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 185.41264186039766,
            "unit": "iter/sec",
            "range": "stddev: 0.00008869040311765318",
            "extra": "mean: 5.393375499999228 msec\nrounds: 38"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 2.9533387887801394,
            "unit": "iter/sec",
            "range": "stddev: 0.040728796493357915",
            "extra": "mean: 338.59982599999796 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.14841650690321578,
            "unit": "iter/sec",
            "range": "stddev: 0.12944702958316",
            "extra": "mean: 6.737795012599994 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 5688.502171949648,
            "unit": "iter/sec",
            "range": "stddev: 0.00001406114991112148",
            "extra": "mean: 175.79319999754262 usec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 28218.137489112694,
            "unit": "iter/sec",
            "range": "stddev: 0.000007649333018723231",
            "extra": "mean: 35.43820000118103 usec\nrounds: 5"
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
          "id": "e9f7887e89adf08a55481f8f51e064dae742a40b",
          "message": "Add cnmaps AI skill definition [skip ci]",
          "timestamp": "2026-04-01T10:58:05Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/163/commits/e9f7887e89adf08a55481f8f51e064dae742a40b"
        },
        "date": 1775101610999,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 50.15049109215238,
            "unit": "iter/sec",
            "range": "stddev: 0.0004114893156664118",
            "extra": "mean: 19.9399842000048 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 189.95146162384026,
            "unit": "iter/sec",
            "range": "stddev: 0.00016719884066464312",
            "extra": "mean: 5.264502791667347 msec\nrounds: 48"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 202.63042561864174,
            "unit": "iter/sec",
            "range": "stddev: 0.00012085252278349624",
            "extra": "mean: 4.935093024391305 msec\nrounds: 41"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 3.248046515528779,
            "unit": "iter/sec",
            "range": "stddev: 0.0338160828647293",
            "extra": "mean: 307.8773642000016 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.17603291223762943,
            "unit": "iter/sec",
            "range": "stddev: 0.04284442798913321",
            "extra": "mean: 5.680755872799997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 5859.727498979178,
            "unit": "iter/sec",
            "range": "stddev: 0.000011636121452949357",
            "extra": "mean: 170.65640000737403 usec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 31293.223776355775,
            "unit": "iter/sec",
            "range": "stddev: 0.000007467065605627406",
            "extra": "mean: 31.955799988736544 usec\nrounds: 5"
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
          "id": "2b7c31a80b96d462a79f4b24368601bb91db73c0",
          "message": "Add multi-name admin filters for #83",
          "timestamp": "2026-04-02T03:54:54Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/165/commits/2b7c31a80b96d462a79f4b24368601bb91db73c0"
        },
        "date": 1775105369809,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 47.42344127992581,
            "unit": "iter/sec",
            "range": "stddev: 0.0003505766324152527",
            "extra": "mean: 21.086618200001794 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 179.30148615379466,
            "unit": "iter/sec",
            "range": "stddev: 0.00007736989716136339",
            "extra": "mean: 5.577198613637016 msec\nrounds: 44"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 194.60252859228777,
            "unit": "iter/sec",
            "range": "stddev: 0.00005710239623489191",
            "extra": "mean: 5.1386793749998105 msec\nrounds: 40"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 3.004591036737223,
            "unit": "iter/sec",
            "range": "stddev: 0.030330268245265784",
            "extra": "mean: 332.82399759999635 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.16717899694530564,
            "unit": "iter/sec",
            "range": "stddev: 0.11012360331042716",
            "extra": "mean: 5.981612632399992 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 5777.03420917114,
            "unit": "iter/sec",
            "range": "stddev: 0.000014119566199047836",
            "extra": "mean: 173.09920000343482 usec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 28701.652076959694,
            "unit": "iter/sec",
            "range": "stddev: 0.00000901969943316359",
            "extra": "mean: 34.84119998802271 usec\nrounds: 5"
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
          "id": "942bd85fa298badc72b347b2c06c5ceefa19a6b3",
          "message": "Add multi-name admin filters for #83",
          "timestamp": "2026-04-02T03:54:54Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/165/commits/942bd85fa298badc72b347b2c06c5ceefa19a6b3"
        },
        "date": 1775106458283,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 48.413356803611975,
            "unit": "iter/sec",
            "range": "stddev: 0.00046097944848471056",
            "extra": "mean: 20.655456800000138 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 180.59014717637237,
            "unit": "iter/sec",
            "range": "stddev: 0.000057095223719501544",
            "extra": "mean: 5.5374006590921905 msec\nrounds: 44"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 198.59189607644322,
            "unit": "iter/sec",
            "range": "stddev: 0.00003786821417888235",
            "extra": "mean: 5.0354521999985025 msec\nrounds: 40"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 3.0600030190234446,
            "unit": "iter/sec",
            "range": "stddev: 0.03330076381423994",
            "extra": "mean: 326.7970632000015 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.16571097504478724,
            "unit": "iter/sec",
            "range": "stddev: 0.053950115936400485",
            "extra": "mean: 6.034603319000004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 5723.102562418567,
            "unit": "iter/sec",
            "range": "stddev: 0.000010647921894168204",
            "extra": "mean: 174.73040000481888 usec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 28011.04754925603,
            "unit": "iter/sec",
            "range": "stddev: 0.000008317737181284066",
            "extra": "mean: 35.70020001006924 usec\nrounds: 5"
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
          "id": "75603e9e3b7f87b21372b98045fe5d693e16fed9",
          "message": "Add multi-name admin filters for #83 (#165)\n\n* Add multi-name admin filters for #83\n\n* Document multi-region selection for #83",
          "timestamp": "2026-04-02T13:18:54+08:00",
          "tree_id": "77eced729f468becbf6d1e70e7e308db7b34a095",
          "url": "https://github.com/cnmetlab/cnmaps/commit/75603e9e3b7f87b21372b98045fe5d693e16fed9"
        },
        "date": 1775107353169,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 45.33130570633897,
            "unit": "iter/sec",
            "range": "stddev: 0.000622260540684871",
            "extra": "mean: 22.059810199999674 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 180.95620952621718,
            "unit": "iter/sec",
            "range": "stddev: 0.00005847805144181153",
            "extra": "mean: 5.526198866666239 msec\nrounds: 45"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 196.33842965068854,
            "unit": "iter/sec",
            "range": "stddev: 0.00004807229578558698",
            "extra": "mean: 5.0932463999998845 msec\nrounds: 40"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 2.975321643308077,
            "unit": "iter/sec",
            "range": "stddev: 0.038107111261491106",
            "extra": "mean: 336.0981164000009 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.1560334151557729,
            "unit": "iter/sec",
            "range": "stddev: 0.2852513179336691",
            "extra": "mean: 6.4088836292 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 5982.650314138244,
            "unit": "iter/sec",
            "range": "stddev: 0.00001303940073182248",
            "extra": "mean: 167.14999999862812 usec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 24620.839080952406,
            "unit": "iter/sec",
            "range": "stddev: 0.000012534174589455371",
            "extra": "mean: 40.61599999545251 usec\nrounds: 5"
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
          "id": "cf704cbc9b5bd1fbf3215ba18a26d62b0996d636",
          "message": "Document EPS clipping workaround for #125",
          "timestamp": "2026-04-02T05:18:58Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/166/commits/cf704cbc9b5bd1fbf3215ba18a26d62b0996d636"
        },
        "date": 1775109302902,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 48.30721145027057,
            "unit": "iter/sec",
            "range": "stddev: 0.00009802888935952976",
            "extra": "mean: 20.700843000003033 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 181.5352340343764,
            "unit": "iter/sec",
            "range": "stddev: 0.00007892158079902222",
            "extra": "mean: 5.508572511111727 msec\nrounds: 45"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 197.9091630634659,
            "unit": "iter/sec",
            "range": "stddev: 0.00008354529196574386",
            "extra": "mean: 5.052823146340718 msec\nrounds: 41"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 3.0452983414163874,
            "unit": "iter/sec",
            "range": "stddev: 0.030168642056997746",
            "extra": "mean: 328.3750515999998 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.173674471321196,
            "unit": "iter/sec",
            "range": "stddev: 0.033899197812515394",
            "extra": "mean: 5.757898627199998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 5700.513273905585,
            "unit": "iter/sec",
            "range": "stddev: 0.000013349752591427217",
            "extra": "mean: 175.42280000952815 usec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 26532.236664111308,
            "unit": "iter/sec",
            "range": "stddev: 0.000008735058591572282",
            "extra": "mean: 37.690000004886315 usec\nrounds: 5"
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
          "id": "3bc41261cac43bd28edcdbecd288c3bb92515f81",
          "message": "Document EPS clipping workaround for #125 (#166)",
          "timestamp": "2026-04-02T13:52:09+08:00",
          "tree_id": "69052eff473f7a06264941c5970b84f4c5a23c1f",
          "url": "https://github.com/cnmetlab/cnmaps/commit/3bc41261cac43bd28edcdbecd288c3bb92515f81"
        },
        "date": 1775109349337,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 46.25268814842907,
            "unit": "iter/sec",
            "range": "stddev: 0.0002761556283275024",
            "extra": "mean: 21.620364999995445 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 179.25837737452676,
            "unit": "iter/sec",
            "range": "stddev: 0.000041665211263257276",
            "extra": "mean: 5.578539840906222 msec\nrounds: 44"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 195.9627010624727,
            "unit": "iter/sec",
            "range": "stddev: 0.00007838056366453815",
            "extra": "mean: 5.103011923076122 msec\nrounds: 39"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 2.9617820605263288,
            "unit": "iter/sec",
            "range": "stddev: 0.03786307792962334",
            "extra": "mean: 337.63456579998774 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.15798892123070454,
            "unit": "iter/sec",
            "range": "stddev: 0.0887623804482775",
            "extra": "mean: 6.329557744999994 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 5480.497102721672,
            "unit": "iter/sec",
            "range": "stddev: 0.00001638322008389207",
            "extra": "mean: 182.4652000095739 usec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 27492.164749359432,
            "unit": "iter/sec",
            "range": "stddev: 0.000010037773726875512",
            "extra": "mean: 36.373999978422944 usec\nrounds: 5"
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
          "id": "b192ab8d86f30ce4a03bb654049e940c9f8f32d6",
          "message": "Add CLI export workflow for #164",
          "timestamp": "2026-04-02T05:52:14Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/167/commits/b192ab8d86f30ce4a03bb654049e940c9f8f32d6"
        },
        "date": 1775111058069,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 46.19904388675729,
            "unit": "iter/sec",
            "range": "stddev: 0.000167664628484826",
            "extra": "mean: 21.645469600002798 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 181.0127467688215,
            "unit": "iter/sec",
            "range": "stddev: 0.00004586001392245886",
            "extra": "mean: 5.524472822221405 msec\nrounds: 45"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 197.630659735439,
            "unit": "iter/sec",
            "range": "stddev: 0.00006598495371399681",
            "extra": "mean: 5.059943641025455 msec\nrounds: 39"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 3.05383585796073,
            "unit": "iter/sec",
            "range": "stddev: 0.03853308011385416",
            "extra": "mean: 327.4570233999981 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.16474564503698766,
            "unit": "iter/sec",
            "range": "stddev: 0.08043977439873759",
            "extra": "mean: 6.0699631834000005 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 5841.223853116773,
            "unit": "iter/sec",
            "range": "stddev: 0.000020804106392752155",
            "extra": "mean: 171.19700000307603 usec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 29378.929430821998,
            "unit": "iter/sec",
            "range": "stddev: 0.000008273483371180544",
            "extra": "mean: 34.03800000114643 usec\nrounds: 5"
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
          "id": "7698898280c1a719144b9a6724e144b3a5bcd96e",
          "message": "Add CLI export workflow for #164 (#167)",
          "timestamp": "2026-04-02T14:21:41+08:00",
          "tree_id": "aae0f1296979b71df591bd3a39d569bb9f9924b5",
          "url": "https://github.com/cnmetlab/cnmaps/commit/7698898280c1a719144b9a6724e144b3a5bcd96e"
        },
        "date": 1775111127249,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 46.96221749654668,
            "unit": "iter/sec",
            "range": "stddev: 0.0002157721450048698",
            "extra": "mean: 21.29371340000148 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 177.98145478774208,
            "unit": "iter/sec",
            "range": "stddev: 0.00006708791798882549",
            "extra": "mean: 5.618562906975811 msec\nrounds: 43"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 194.79979548422847,
            "unit": "iter/sec",
            "range": "stddev: 0.00006949934453548596",
            "extra": "mean: 5.133475615383604 msec\nrounds: 39"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 3.0211878666453473,
            "unit": "iter/sec",
            "range": "stddev: 0.035367114809134875",
            "extra": "mean: 330.99563620000083 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.155629608109979,
            "unit": "iter/sec",
            "range": "stddev: 0.09924176317489625",
            "extra": "mean: 6.4255125496000005 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 5607.204136111894,
            "unit": "iter/sec",
            "range": "stddev: 0.000025634990735982707",
            "extra": "mean: 178.34199999242628 usec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 27782.2538084318,
            "unit": "iter/sec",
            "range": "stddev: 0.000008240458125922307",
            "extra": "mean: 35.99419999886777 usec\nrounds: 5"
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
          "id": "15a78347255e067657d4ae54de9feb96d555a1f3",
          "message": "Add boundary spec check workflow for #84",
          "timestamp": "2026-04-02T06:21:45Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/168/commits/15a78347255e067657d4ae54de9feb96d555a1f3"
        },
        "date": 1775113721146,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 53.23550493030238,
            "unit": "iter/sec",
            "range": "stddev: 0.0003403784010116665",
            "extra": "mean: 18.78445599998031 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 224.08962560591075,
            "unit": "iter/sec",
            "range": "stddev: 0.00003547990259484376",
            "extra": "mean: 4.462500204086303 msec\nrounds: 49"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 239.151505142178,
            "unit": "iter/sec",
            "range": "stddev: 0.00004419297345729063",
            "extra": "mean: 4.181449744192452 msec\nrounds: 43"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 3.656628118909824,
            "unit": "iter/sec",
            "range": "stddev: 0.02734497843601289",
            "extra": "mean: 273.4759914000051 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.1548240865116832,
            "unit": "iter/sec",
            "range": "stddev: 0.045208525563408944",
            "extra": "mean: 6.458943324200004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 6877.143949544824,
            "unit": "iter/sec",
            "range": "stddev: 0.00001061474826091754",
            "extra": "mean: 145.40920000172264 usec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 32883.70349716656,
            "unit": "iter/sec",
            "range": "stddev: 0.000007610895164933706",
            "extra": "mean: 30.410199997277232 usec\nrounds: 5"
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
          "id": "be03bec1ffef35af5fd980c8cdbe958936ba0687",
          "message": "Add boundary spec check workflow for #84 (#168)\n\n* Add boundary spec check workflow for #84\n\n* Fix Python 3.9 typing and cover CLI tests in CI",
          "timestamp": "2026-04-02T15:35:08+08:00",
          "tree_id": "c82ec2281a832b6e6858c922c75d9a112f40b94b",
          "url": "https://github.com/cnmetlab/cnmaps/commit/be03bec1ffef35af5fd980c8cdbe958936ba0687"
        },
        "date": 1775115530232,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 46.31991645147959,
            "unit": "iter/sec",
            "range": "stddev: 0.0002890026474093437",
            "extra": "mean: 21.58898539999541 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 179.99759379215638,
            "unit": "iter/sec",
            "range": "stddev: 0.00011988048072764886",
            "extra": "mean: 5.555629822222524 msec\nrounds: 45"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 198.8884630962937,
            "unit": "iter/sec",
            "range": "stddev: 0.00004671911009707526",
            "extra": "mean: 5.027943725000483 msec\nrounds: 40"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 3.045900334594397,
            "unit": "iter/sec",
            "range": "stddev: 0.036130634324644605",
            "extra": "mean: 328.3101514000009 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.16474996031788797,
            "unit": "iter/sec",
            "range": "stddev: 0.07158852608391685",
            "extra": "mean: 6.0698041934 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 5723.724954187772,
            "unit": "iter/sec",
            "range": "stddev: 0.000014029976086098052",
            "extra": "mean: 174.71140000679952 usec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 28508.22176615128,
            "unit": "iter/sec",
            "range": "stddev: 0.000008065323533397784",
            "extra": "mean: 35.07760000616145 usec\nrounds: 5"
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
          "id": "fabb6707c9c92d02ff9afd97e667d89b6b184276",
          "message": "Add streamplot clipping support for #55",
          "timestamp": "2026-04-02T07:35:12Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/169/commits/fabb6707c9c92d02ff9afd97e667d89b6b184276"
        },
        "date": 1775117343279,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 43.80997476017607,
            "unit": "iter/sec",
            "range": "stddev: 0.00011012393938505248",
            "extra": "mean: 22.825852000011082 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 175.0190668688026,
            "unit": "iter/sec",
            "range": "stddev: 0.00008215672261664212",
            "extra": "mean: 5.713663190477513 msec\nrounds: 42"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 191.11778293233007,
            "unit": "iter/sec",
            "range": "stddev: 0.0000677358330515526",
            "extra": "mean: 5.232375473684071 msec\nrounds: 38"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 2.8876837929879704,
            "unit": "iter/sec",
            "range": "stddev: 0.044431818581814664",
            "extra": "mean: 346.29830399999264 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.1579097924686928,
            "unit": "iter/sec",
            "range": "stddev: 0.10382897283425042",
            "extra": "mean: 6.3327294929999995 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 5496.142257749466,
            "unit": "iter/sec",
            "range": "stddev: 0.000019337718750179428",
            "extra": "mean: 181.94579999999405 usec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 28717.80735504933,
            "unit": "iter/sec",
            "range": "stddev: 0.000008774611080051755",
            "extra": "mean: 34.82159997929557 usec\nrounds: 5"
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
          "id": "be06ac954d5f71cfc373c9b32b1b6d79fbf1703d",
          "message": "Add streamplot clipping support for #55 (#169)",
          "timestamp": "2026-04-02T16:18:15+08:00",
          "tree_id": "f4da9acdcfeb7e9e32f244fc35ec7dbabe030ada",
          "url": "https://github.com/cnmetlab/cnmaps/commit/be06ac954d5f71cfc373c9b32b1b6d79fbf1703d"
        },
        "date": 1775118122434,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 45.48836812389131,
            "unit": "iter/sec",
            "range": "stddev: 0.00021558704567337615",
            "extra": "mean: 21.983642000003556 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 172.68559498407777,
            "unit": "iter/sec",
            "range": "stddev: 0.00014601418241347097",
            "extra": "mean: 5.790870976193489 msec\nrounds: 42"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 190.64159661879205,
            "unit": "iter/sec",
            "range": "stddev: 0.00008859812158377942",
            "extra": "mean: 5.245444948720217 msec\nrounds: 39"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 2.9468587561851285,
            "unit": "iter/sec",
            "range": "stddev: 0.040280790566508066",
            "extra": "mean: 339.3443944000069 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.1543412721941999,
            "unit": "iter/sec",
            "range": "stddev: 0.06262421911118045",
            "extra": "mean: 6.479148356000008 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 5546.459362402979,
            "unit": "iter/sec",
            "range": "stddev: 0.00001928099099244133",
            "extra": "mean: 180.29519999345212 usec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 27849.41263698529,
            "unit": "iter/sec",
            "range": "stddev: 0.00000912609415479812",
            "extra": "mean: 35.90740002437087 usec\nrounds: 5"
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
          "id": "c2a5a6157850c3db076a78861a208f729d83b0af",
          "message": "Add imshow clipping support for #56",
          "timestamp": "2026-04-02T08:18:20Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/170/commits/c2a5a6157850c3db076a78861a208f729d83b0af"
        },
        "date": 1775118945496,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 45.66503386162524,
            "unit": "iter/sec",
            "range": "stddev: 0.0001439541269356096",
            "extra": "mean: 21.89859320000096 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 178.79900182205446,
            "unit": "iter/sec",
            "range": "stddev: 0.0000836910810381523",
            "extra": "mean: 5.592872386363917 msec\nrounds: 44"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 194.3660011609159,
            "unit": "iter/sec",
            "range": "stddev: 0.00011378684990660676",
            "extra": "mean: 5.144932724999052 msec\nrounds: 40"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 2.993615216269287,
            "unit": "iter/sec",
            "range": "stddev: 0.03866883985027377",
            "extra": "mean: 334.04426680000086 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.1497343159263419,
            "unit": "iter/sec",
            "range": "stddev: 0.08979182761372169",
            "extra": "mean: 6.678495799799995 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 5639.032026428623,
            "unit": "iter/sec",
            "range": "stddev: 0.000024297631176787778",
            "extra": "mean: 177.33539999653658 usec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 27778.549404717334,
            "unit": "iter/sec",
            "range": "stddev: 0.00000958555880013962",
            "extra": "mean: 35.998999999264925 usec\nrounds: 5"
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
          "id": "0526992cd477da6838a63cc52347645676fda8ed",
          "message": "Add imshow clipping support for #56 (#170)",
          "timestamp": "2026-04-02T16:52:45+08:00",
          "tree_id": "3cbb5b22d2b5620e88c794f4951b360dfd2efcc7",
          "url": "https://github.com/cnmetlab/cnmaps/commit/0526992cd477da6838a63cc52347645676fda8ed"
        },
        "date": 1775120188312,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 43.42542308043071,
            "unit": "iter/sec",
            "range": "stddev: 0.00030709144303718035",
            "extra": "mean: 23.027985200002377 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 167.45427617186647,
            "unit": "iter/sec",
            "range": "stddev: 0.00012133046189167898",
            "extra": "mean: 5.971779418601717 msec\nrounds: 43"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 184.6807098462603,
            "unit": "iter/sec",
            "range": "stddev: 0.00010231147741955582",
            "extra": "mean: 5.414750684207691 msec\nrounds: 38"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 2.8905984419945026,
            "unit": "iter/sec",
            "range": "stddev: 0.03941162712063735",
            "extra": "mean: 345.94912439999916 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.14587409341902932,
            "unit": "iter/sec",
            "range": "stddev: 0.2843796673968456",
            "extra": "mean: 6.8552268368 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 5604.960165399544,
            "unit": "iter/sec",
            "range": "stddev: 0.00001606071003535418",
            "extra": "mean: 178.41340000472883 usec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 28942.889888879654,
            "unit": "iter/sec",
            "range": "stddev: 0.00000898966759413232",
            "extra": "mean: 34.55080000094313 usec\nrounds: 5"
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
          "id": "ad03b1f92b5fb92d552537b3500d5b08634a8edb",
          "message": "Bump cnmaps to 2.1.0 and require cnmaps-data 1.1.2",
          "timestamp": "2026-04-02T08:52:51Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/171/commits/ad03b1f92b5fb92d552537b3500d5b08634a8edb"
        },
        "date": 1775123630597,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 47.22170619390512,
            "unit": "iter/sec",
            "range": "stddev: 0.0000907797379401806",
            "extra": "mean: 21.17670200000248 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 181.07375896665806,
            "unit": "iter/sec",
            "range": "stddev: 0.00005318068654539242",
            "extra": "mean: 5.522611369569759 msec\nrounds: 46"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 197.30802174917744,
            "unit": "iter/sec",
            "range": "stddev: 0.00009898351847890621",
            "extra": "mean: 5.068217658536069 msec\nrounds: 41"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 3.1009691885078228,
            "unit": "iter/sec",
            "range": "stddev: 0.03368810437805953",
            "extra": "mean: 322.47982459999776 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.16762633049306389,
            "unit": "iter/sec",
            "range": "stddev: 0.05709833622173441",
            "extra": "mean: 5.965649889600002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 5667.539845655883,
            "unit": "iter/sec",
            "range": "stddev: 0.00001561625379689668",
            "extra": "mean: 176.44339999947078 usec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 28064.188413806263,
            "unit": "iter/sec",
            "range": "stddev: 0.000008550322053346139",
            "extra": "mean: 35.63259999737056 usec\nrounds: 5"
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
          "id": "332d36525051914a94a9ef60d1f549a2262ce39b",
          "message": "Bump cnmaps to 2.1.0 and require cnmaps-data 1.1.2",
          "timestamp": "2026-04-02T08:52:51Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/171/commits/332d36525051914a94a9ef60d1f549a2262ce39b"
        },
        "date": 1775123728998,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 48.572258768461204,
            "unit": "iter/sec",
            "range": "stddev: 0.00010854803708927773",
            "extra": "mean: 20.587883400006035 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 180.15204111658957,
            "unit": "iter/sec",
            "range": "stddev: 0.000053431783926133965",
            "extra": "mean: 5.550866888889851 msec\nrounds: 45"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 197.87389643009843,
            "unit": "iter/sec",
            "range": "stddev: 0.00003358409435253552",
            "extra": "mean: 5.053723699999324 msec\nrounds: 40"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 3.046217289130787,
            "unit": "iter/sec",
            "range": "stddev: 0.034947564090713125",
            "extra": "mean: 328.27599120000457 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.16484976801382206,
            "unit": "iter/sec",
            "range": "stddev: 0.042437969652989925",
            "extra": "mean: 6.066129252400001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 5776.426864320023,
            "unit": "iter/sec",
            "range": "stddev: 0.00001615045247761115",
            "extra": "mean: 173.11739999286146 usec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 24846.572416374416,
            "unit": "iter/sec",
            "range": "stddev: 0.000014136675172662912",
            "extra": "mean: 40.246999998316824 usec\nrounds: 5"
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
          "id": "2fd92336f3bbc86a0f8013d9c7ff2b5804cc2fde",
          "message": "Bump cnmaps to 2.1.0 and require cnmaps-data 1.1.2",
          "timestamp": "2026-04-02T08:52:51Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/171/commits/2fd92336f3bbc86a0f8013d9c7ff2b5804cc2fde"
        },
        "date": 1775124087280,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 49.598566069733465,
            "unit": "iter/sec",
            "range": "stddev: 0.0001375156546206206",
            "extra": "mean: 20.161873200004266 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 178.78564143911984,
            "unit": "iter/sec",
            "range": "stddev: 0.000044706702796671616",
            "extra": "mean: 5.593290333332057 msec\nrounds: 45"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 195.83019622913392,
            "unit": "iter/sec",
            "range": "stddev: 0.00006931986809196961",
            "extra": "mean: 5.1064647804873555 msec\nrounds: 41"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 3.0265519016990403,
            "unit": "iter/sec",
            "range": "stddev: 0.03665490388623172",
            "extra": "mean: 330.4090042000013 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.1641555147842591,
            "unit": "iter/sec",
            "range": "stddev: 0.023724083875186073",
            "extra": "mean: 6.0917843748 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 5873.29424857977,
            "unit": "iter/sec",
            "range": "stddev: 0.000019061944627022622",
            "extra": "mean: 170.2621999982057 usec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 28992.23008921805,
            "unit": "iter/sec",
            "range": "stddev: 0.00000923855951379387",
            "extra": "mean: 34.49199999181474 usec\nrounds: 5"
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
          "id": "c0275dcfb0c5369b1d96ffc399844358ffd2bf39",
          "message": "Bump cnmaps to 2.1.0 and require cnmaps-data 1.1.2",
          "timestamp": "2026-04-02T08:52:51Z",
          "url": "https://github.com/cnmetlab/cnmaps/pull/171/commits/c0275dcfb0c5369b1d96ffc399844358ffd2bf39"
        },
        "date": 1775126976341,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_perf.py::test_query_country_boundary",
            "value": 45.48754087612394,
            "unit": "iter/sec",
            "range": "stddev: 0.0002787353960003387",
            "extra": "mean: 21.98404180000182 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_query_foreign_country_boundary",
            "value": 177.39785702651025,
            "unit": "iter/sec",
            "range": "stddev: 0.00008648506143394754",
            "extra": "mean: 5.6370466744170455 msec\nrounds: 43"
          },
          {
            "name": "tests/test_perf.py::test_query_province_boundary",
            "value": 193.4402304879114,
            "unit": "iter/sec",
            "range": "stddev: 0.00009592449559598486",
            "extra": "mean: 5.169555461538248 msec\nrounds: 13"
          },
          {
            "name": "tests/test_perf.py::test_draw_map_country",
            "value": 2.9899891819380984,
            "unit": "iter/sec",
            "range": "stddev: 0.020106971063435095",
            "extra": "mean: 334.449370599998 msec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_clip_contourf_country",
            "value": 0.15906545169495254,
            "unit": "iter/sec",
            "range": "stddev: 0.12613707055594328",
            "extra": "mean: 6.286720273600002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_maskout_core",
            "value": 5818.242751338303,
            "unit": "iter/sec",
            "range": "stddev: 0.000015854409934313583",
            "extra": "mean: 171.8731999915235 usec\nrounds: 5"
          },
          {
            "name": "tests/test_perf.py::test_make_maskout_array_core",
            "value": 28439.631191688703,
            "unit": "iter/sec",
            "range": "stddev: 0.000007937781226479465",
            "extra": "mean: 35.16220000392423 usec\nrounds: 5"
          }
        ]
      }
    ]
  }
}