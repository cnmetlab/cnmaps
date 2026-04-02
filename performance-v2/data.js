window.BENCHMARK_DATA = {
  "lastUpdate": 1775101613077,
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
      }
    ]
  }
}