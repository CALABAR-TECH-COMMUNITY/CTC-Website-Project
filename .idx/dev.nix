{pkgs}: {
  channel = "stable-24.05";
  packages = [
    pkgs.nodejs_20
    pkgs.firebase-tools
  ];
  idx.extensions = [
    "svelte.svelte-vscode"
    "vue.volar"
  ];
  idx.previews = {
    previews = {
      web = {
        command = [
          "npm"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--host"
          "0.0.0.0"
        ];
        manager = "web";
      };
      firebase = {
        command = [
          "firebase"
          "emulators:start"
          "--only"
          "auth,firestore,storage"
          "--import"
          "./firebase-seed"
          "--export-on-exit"
          "./firebase-seed"
        ];
        manager = "web";
        env = {
          FIRESTORE_EMULATOR_HOST = "127.0.0.1:8080";
          FIREBASE_STORAGE_EMULATOR_HOST = "127.0.0.1:9199";
          FIREBASE_AUTH_EMULATOR_HOST = "127.0.0.1:9099";
        };
      };
    };
  };
}