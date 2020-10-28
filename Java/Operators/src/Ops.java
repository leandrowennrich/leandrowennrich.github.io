import java.util.*;

public class Ops {
    // create a shorthand to print the results
    static void prt(String strg) {
        System.out.println(strg);
    }

    static void prtInt(String strg, int i) {
        prt(strg + " = " + i);
    }

    static void prtFlt(String strg, float f) {
        prt(strg + " = " + f);
    }

    public static void main(String[] args) {
        Random rand = new Random();
        int i, j, k;
        j = rand.nextInt() % 100;
        k = rand.nextInt() % 100;
        prtInt("j", j);
        prtInt("k", k);
        i = j + k;
        prtInt("j + k", i);
        i = j - k;
        prtInt("j - k", i);
        i = j * k;
        prtInt("j * k", i);
        i = j / k;
        prtInt("j / k", i);
        i = j % k;
        prtInt("j % k", i);

        float w, e, r;
        e = rand.nextFloat();
        r = rand.nextFloat();
        prtFlt("e", j);
        prtFlt("r", k);
        w = j + k;
        prtFlt("e + r", w);
        w = j - k;
        prtFlt("e - r", w);
        w = j * k;
        prtFlt("e * r", w);
        w = j / k;
        prtFlt("e / r", w);
        w = j % k;
        prtFlt("e % r", w);
    }
}
