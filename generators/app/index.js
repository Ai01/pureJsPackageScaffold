const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the dazzling ${chalk.red(
          "generator-pure-js-package-scaffold"
        )} generator!`
      )
    );

    const prompts = [
      {
        type: "input",
        name: "packageName",
        message: "you package name?"
      },
      {
        type: "input",
        name: "packageVersion",
        message: "you package version?"
      },
      {
        type: "input",
        name: "packageAuthor",
        message: "package author?"
      },
      {
        type: "input",
        name: "packageDesc",
        message: "package description?"
      }
    ];

    await this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    console.log(this.props);

    this.fs.copyTpl(
      this.templatePath("package.json"),
      this.destinationPath("./package.json"),
      {
        packageName: this.props.packageName,
        packageVersion: this.props.packageVersion,
        packageAuthor: this.props.packageAuthor,
        packageDesc: this.props.packageDesc
      }
    );

    this.fs.copyTpl(this.templatePath("src"), this.destinationPath("./src"));
    this.fs.copyTpl(this.templatePath("test"), this.destinationPath("./test"));
    this.fs.copyTpl(
      this.templatePath("readme.md"),
      this.destinationPath("./reade.md")
    );
    this.fs.copyTpl(
      this.templatePath("rollup.config.js"),
      this.destinationPath("./rollup.config.js")
    );
    this.fs.copyTpl(
      this.templatePath("_gitignore"),
      this.destinationPath("./.gitignore")
    );
    this.fs.copyTpl(
      this.templatePath(".eslintrc.js"),
      this.destinationPath("./eslintrc.js")
    );
  }

  install() {
    this.installDependencies();
  }
};
