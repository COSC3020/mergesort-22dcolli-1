//I referenced last semesters repository to correct the code I wrote this semester
function mergesort(array) {
    
    const arrLen = array.length;
    
    for (let i = 1; i <= arrLen - 1; i = (2*i)) {
        for (let j = 0; j < arrLen - 1; j = (j+(2*i))) {
            let mid = j + i - 1;
            let last = Math.min(j + 2 * i - 1, arrLen - 1);
            let left = j;
            let right = mid + 1;
            
            while (left <= mid && right <= last) {
                if (array[left] > array[right]) {
                    let tmp = array[right];
                    for (let k = right; k > left; k--) {
                        array[k] = array[k - 1];
                    }
                    array[left] = tmp;
                    left++;
                    right++;
                    mid++;
                } else{
                    left++;
                }
            }
        }
    }
    return array; 
}
