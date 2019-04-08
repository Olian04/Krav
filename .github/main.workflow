workflow "CI - OnPush" {
  on = "push"
  resolves = [
    "Lint",
    "Coverage",
  ]
}

action "Install" {
  uses = "actions/npm@master"
  args = "install"
}

action "Lint" {
  needs = "Install"
  uses = "actions/npm@master"
  args = "lint:nofix"
}

action "Test" {
  needs = "Install"
  uses = "actions/npm@master"
  args = "test"
}

action "Coverage" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Test"]
  secrets = ["CODECOV_TOKEN"]
  runs = "coverage"
}
