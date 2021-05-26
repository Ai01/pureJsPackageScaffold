"use strict";
const path = require("path");
const helpers = require("yeoman-test");
const fs = require("fs-extra");

describe("generator-pure-js-package-scaffold:app", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withOptions({
        packageName: "test",
        packageVersion: "test",
        packageAuthor: "test",
        packageDesc: "test"
      })
      .inTmpDir(() => {
        const tmpDir = path.join(__dirname, "../tmp");

        if (!fs.pathExistsSync(tmpDir)) {
          fs.mkdirpSync(tmpDir);
        } else {
          fs.emptyDirSync(tmpDir);
        }

        fs.copySync(
          path.join(__dirname, "../generators/app/templates"),
          tmpDir
        );
      })
      .withPrompts({ someAnswer: true });
  });

  it("creates files", () => {});
});
