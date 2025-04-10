export function getVirtualResponse() {

  const response: Response = {
    ok: true,
    redirected: false,
    status: 200,
    statusText: "",
    type: "basic",
    url: "",
    body: null,
    bodyUsed: false,
    headers: {
      append: function (name: string, value: string): void {
        throw new Error("Function not implemented.");
      },
      delete: function (name: string): void {
        throw new Error("Function not implemented.");
      },
      get: function (name: string): string | null {
        throw new Error("Function not implemented.");
      },
      getSetCookie: function (): string[] {
        throw new Error("Function not implemented.");
      },
      has: function (name: string): boolean {
        throw new Error("Function not implemented.");
      },
      set: function (name: string, value: string): void {
        throw new Error("Function not implemented.");
      },
      forEach: function (callbackfn: (value: string, key: string, parent: Headers) => void, thisArg?: any): void {
        throw new Error("Function not implemented.");
      },
      entries: function (): HeadersIterator<[string, string]> {
        throw new Error("Function not implemented.");
      },
      keys: function (): HeadersIterator<string> {
        throw new Error("Function not implemented.");
      },
      values: function (): HeadersIterator<string> {
        throw new Error("Function not implemented.");
      },
      [Symbol.iterator]: function (): HeadersIterator<[string, string]> {
        throw new Error("Function not implemented.");
      }
    },
    clone: function (): Response {
      throw new Error("Function not implemented.");
    },
    arrayBuffer: function (): Promise<ArrayBuffer> {
      throw new Error("Function not implemented.");
    },
    blob: function (): Promise<Blob> {
      throw new Error("Function not implemented.");
    },
    bytes: function (): Promise<Uint8Array> {
      throw new Error("Function not implemented.");
    },
    formData: function (): Promise<FormData> {
      throw new Error("Function not implemented.");
    },
    json: function (): Promise<any> {
      throw new Error("Function not implemented.");
    },
    text: function (): Promise<string> {
      throw new Error("Function not implemented.");
    }, 
  }

  return response;
}

