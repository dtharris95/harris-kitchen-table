import Pocketbase from "pocketbase";

const pocketbaseUrl =
  import.meta.env.VITE_POCKETBASE_URL || "http://127.0.0.1:8090";

const pb = new Pocketbase(pocketbaseUrl);
pb.autoCancellation(false);

export default pb;
