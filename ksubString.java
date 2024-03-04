
import java.util.HashSet;
import java.util.Set;
import java.util.*;
 
class Main
{
    // Define the character range
    public static final int CHAR_RANGE = 128;
 
    // Function to find the longest substring of a given string containing
    // `k` distinct characters using a sliding window
    public static String findLongestSubstring(String str, int k)
    {
        // base case
        if (str == null || str.length() == 0) {
            return str;
        }
 
        // stores the longest substring boundaries
        int end = 0, begin = 0;
 
        // set to store distinct characters in a window
        Set<Character> window = new HashSet<>();
 
        // Count array `freq` stores the frequency of characters present in the
        // current window. We can also use a map instead of a count array.
        int[] freq = new int[CHAR_RANGE];
       for(int i=0;i<freq.length;i++){
        System.out.println(freq[i]);
       }
 
        // `[low…high]` maintains the sliding window boundaries
        for (int low = 0, high = 0; high < str.length(); high++)
        {
            window.add(str.charAt(high));
            //System.out.print(window);
            freq[str.charAt(high)]++;
            System.out.print(freq[str.charAt(high)]);
            // if the window size is more than `k`, remove characters from the left
            while (window.size() > k)
            {
                // If the leftmost character's frequency becomes 0 after
                // removing it in the window, remove it from the set as well
                if (--freq[str.charAt(low)] == 0) {
                    window.remove(str.charAt(low));
                }
 
                low++;        // reduce window size
            }
 
            // update the maximum window size if necessary
            if (end - begin < high - low)
            {
                end = high;
                begin = low;
            }
        }
        System.out.println(" java after......");
        for(int i=0;i<freq.length;i++){
            System.out.println(freq[i]);
            System.out.println(window.contains(str.charAt(i)));
           }
 
        // return the longest substring found at `str[begin…end]`
        return str.substring(begin, end + 1);
    }
    public static List<Integer> maxOfSizeK(int[] arg,int k){
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
 
    public static void main(String[] args)
    {
        //String str = "ABCBDBDBBBCBABD";
        //int k = 3;
        int[] arr= new int[]{2,7,5,23,89,13,79};
       // System.out.print(findLongestSubstring(str, k));
        System.out.println(maxOfSizeK(arr,3));
    }
}