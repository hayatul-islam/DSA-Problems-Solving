// link: https://codeforces.com/group/MWSDmqGsZm/contest/219856/problem/K

#include <stdio.h>
#include <stdbool.h>
int main()
{
    int n;
    scanf("%d", &n);

    for (int i = 0; i < n; i++)
    {
        char s[51], t[51];
        scanf("%s %s", s, t);

        int j = 0;
        bool isS = true;
        bool isT = true;
        while (1)
        {

            if (s[j] == '\0')
            {
                isS = false;
            }
            if (t[j] == '\0')
            {
                isT = false;
            }

            if (!isS && !isT)
            {
                break;
            }

            if (isS && isT)
            {
                printf("%c%c", s[j], t[j]);
            }
            else if (isS)
            {
                printf("%c", s[j]);
            }
            else if (isT)
            {
                printf("%c", t[j]);
            }

            j++;
        }

        printf("\n");
    }
    return 0;
}