import { http, HttpResponse, type HttpHandler, type GraphQLHandler } from "msw";

export const handlers: (HttpHandler | GraphQLHandler)[] = [
  http.get("/images/:imageId", async ({ params }) => {
    // Get an ArrayBuffer from reading the file from disk or fetching it.
    const buffer = await fetch(`/static/images/${params.imageId}`).then(
      (response) => response.arrayBuffer()
    );

    return HttpResponse.arrayBuffer(buffer, {
      headers: {
        "content-type": "image/png",
      },
    });
  }),
];
