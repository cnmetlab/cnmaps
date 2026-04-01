window.BENCHMARK_DATA = {
  "lastUpdate": 1775021477187,
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
      }
    ]
  }
}