// link: https://codeforces.com/group/MWSDmqGsZm/contest/219856/problem/J

#include <stdio.h>
int main()
{
    char s[10000001];
    scanf("%s", s);

    int fre[26] = {0};
    for (int i = 0; s[i] != '\0'; i++)
    {
        fre[s[i] - 'a']++;
    }

    for (int i = 0; i < 26; i++)
    {
        if (fre[i] > 0)
        {
            printf("%c : %d\n", i + 'a', fre[i]);
        }
    }
    return 0;
}