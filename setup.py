import setuptools
import os
import codecs


def read(rel_path):
    here = os.path.abspath(os.path.dirname(__file__))
    with codecs.open(os.path.join(here, rel_path), "r", encoding="utf-8") as fp:
        return fp.read()


def get_version(rel_path):
    for line in read(rel_path).splitlines():
        if line.startswith("__version__"):
            delim = '"' if '"' in line else "'"
            return line.split(delim)[1]
    else:
        raise RuntimeError("Unable to find version string.")


FILE_PATH = os.path.dirname(os.path.realpath(__file__))

with open(os.path.join(FILE_PATH, "README.md"), "r", encoding="utf-8") as fh:
    try:
        long_description = fh.read()
    except UnicodeDecodeError:
        pass

requirements_path = os.path.join(FILE_PATH, "requirements.txt")
with open(requirements_path, "r", encoding="utf-8") as f:
    required = f.read().splitlines()

setuptools.setup(
    name="cnmaps",
    version=get_version("cnmaps/__init__.py"),
    author="Wentao Li",
    author_email="clarmylee92510@gmail.com",
    description="A python package to draw china maps more easily",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/Clarmy/cnmaps",
    include_package_data=True,
    package_data={"": ["*.geojson", "*.nc", "*.db"]},
    packages=setuptools.find_packages(),
    install_requires=required,
    classifiers=[
        "Programming Language :: Python :: 3",
    ],
    python_requires=">=3.6",
)
