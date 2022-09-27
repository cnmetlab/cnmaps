from cnmaps import get_adm_maps


def test_issue85():
    # https://github.com/cnmetlab/cnmaps/issues/85
    get_adm_maps(
        city="长春市", level="市", only_polygon=True, record="first"
    ) + get_adm_maps(city="吉林市", level="市", only_polygon=True, record="first")
    get_adm_maps(
        city="吉林市", level="市", only_polygon=True, record="first"
    ) + get_adm_maps(city="辽源市", level="市", only_polygon=True, record="first")


if __name__ == "__main__":
    test_issue85()
