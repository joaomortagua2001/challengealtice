package org.acme;

import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

@Path("/labseq")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class LabseqResource {

    @Inject
    LabseqService service;

    @GET
    @Path("/{n}")
    public Result getValue(@PathParam("n") int n) {
        if (n < 0) {
            throw new WebApplicationException("O numero deve ser superior a 0", 400);
        }

        long value = service.getLabseq(n);
        return new Result(n, value);
    }

    public record Result(int index, long value) {}
}