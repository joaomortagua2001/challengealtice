package org.acme;

import jakarta.enterprise.context.ApplicationScoped;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@ApplicationScoped
public class LabseqService {

    private final Map<Integer, Long> cache = new ConcurrentHashMap<>();

    public long getLabseq(int n) {
        if (n < 0) {
            throw new IllegalArgumentException("n deve ser >= 0");
        }


        if (cache.containsKey(n)) {
            return cache.get(n);
        }


        cache.put(0, 0L);
        cache.put(1, 1L);
        cache.put(2, 0L);
        cache.put(3, 1L);


        for (int i = 4; i <= n; i++) {

            long value = cache.get(i - 4) + cache.get(i - 3);
            cache.put(i, value);
        }

        return cache.get(n);
    }
}
