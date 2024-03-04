import java.util.List;
import java.util.ArrayList;
import java.util.Deque;
import java.util.ArrayDeque;

public class MaxOfSlidingWindow {
    public List<Integer> maxOfSizeK(int[] arg,int k){
        List<Integer> sol=new ArrayList<>();
        Deque<Integer> coll=new ArrayDeque<>();
        for(int i=0;i<k;i++){
            while(coll.size()!=0 && arg[i]>arg[coll.peek()]){
                coll.removeLast();
            }
            coll.add(i);
        }
        sol.add(arg[coll.getFirst()]);
       for(int i=k;i<arg.length;i++){
        while(coll.size()!=0 && coll.getFirst()<=i-k){
            coll.removeFirst();
        }
        while(coll.size()!=0 && arg[i]>arg[coll.getLast()]){
            coll.removeLast();
        }
       coll.add(i);
        sol.add(arg[coll.getFirst()]);
       } 
        return sol;
    }
    
}
