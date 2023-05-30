class Solution:
    def isPalindrome(self, s: str) -> bool:
        replaced = "".join([x for x in s.lower() if x.isalnum()])
        for i in range(len(replaced) // 2):
            if replaced[i] != replaced[-i - 1]: 
                return False
        return True