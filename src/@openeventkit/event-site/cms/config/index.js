import defaultConfig from "@openeventkit/event-site/src/cms/config";

const config = { ...defaultConfig };
// TODO: move to env var
config.backend.repo = "fntechgit/prod-2023ocpglo";
config.backend.branch = "master";

export default config;
