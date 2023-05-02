import { toast } from "react-toastify";

class NotifyService {
  error(e: any) {
    const error = this.errorExtructor(e);
    toast.error(error, {
      style: { whiteSpace: "pre-line" },
    });
  }

  info(msg: string) {
    toast.info(msg);
  }

  success(msg: string) {
    toast.success(msg);
  }

  private errorExtructor(e: any) {
    if (e?.response?.data) {
      if (Array.isArray(e.response.data.message)) {
        return e.response.data.message.join("\n");
      }
      return e.response.data;
    }
    if (e?.message) {
      return e.message;
    }
  }
}

export const notifyService = new NotifyService();
