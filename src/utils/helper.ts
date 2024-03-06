const md5 = require("md5");
class Helper {
    core: any = window.core;

    md5Hash(content: string): string {
        return md5(content);
    }
}

const helper=new Helper();
export default helper;
