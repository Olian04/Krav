version = 0

workflow "CI - OnPush" {
  on = "push"
  resolves = [
    "Lint",
    "Coverage",
    "Increment_prerelease_version",
  ]
}

action "Install" {
  uses = "actions/npm@master"
  args = "install"
}

action "Lint" {
  needs = ["Install"]
  uses = "actions/npm@master"
  args = "run lint:nofix"
}

action "Test" {
  needs = ["Install"]
  uses = "actions/npm@master"
  args = "test"
}

action "Coverage" {
  needs = ["Test"]
  uses = "actions/npm@master"
  secrets = ["CODECOV_TOKEN"]
  args = "run coverage"
}

action "Increment_prerelease_version" {
  uses = "actions/npm@master"
  needs = ["Test"]
  args = "version prerelease"
  secrets = ["GITHUB_TOKEN"]
}
