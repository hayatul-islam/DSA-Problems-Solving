#include <stdio.h>
int main()
{
    int n;
    scanf("%d", &n);
    for (int i = 0; i < n; i++)
    {
        char s[101];
        scanf("%s", s);

        int count = 0;

        for (int i = 0; s[i] != '\0'; i++)
        {
            count++;
        }

        if (count < 10)
        {
            printf("%s\n", s);
        }
        else
        {
            char firstLetter = s[0];
            char lastLetter = s[count - 1];
            printf("%c%d%c\n", firstLetter, count - 2, lastLetter);
        }
    }
    return 0;
}