import { uniformConfig } from "@uniformdev/cli/config";

export default uniformConfig({
  preset: "none",
  config: {
    serialization: {
      mode: "merge",
      entitiesConfig: {
        locale: {},
        component: {},
        composition: {},
        componentPattern: {},
        compositionPattern: {},
        contentType: {},
        entry: {},
        entryPattern: {},
      },
    },
  },
});