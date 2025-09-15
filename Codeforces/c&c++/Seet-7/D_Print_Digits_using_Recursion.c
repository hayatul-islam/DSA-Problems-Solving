#include <stdio.h>

void printDigits(char s[], int i)
{
    if (s[i] == '\0')
    {
        return;
    }

    printf("%c ", s[i]);
    printDigits(s, i + 1);
}

int main()
{
    int n;
    scanf("%d", &n);

    for (int i = 0; i < n; i++)
    {
        char s[1000001];
        scanf("%s", s);

        printDigits(s, 0);
        printf("\n");
    }

    return 0;
}