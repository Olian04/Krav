workflow "CI - OnPush" {
  on = "push"
  resolves = ["Lint", "Test"]
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



