#include <bits/stdc++.h>
using namespace std;

int main()
{
    string s;
    cin >> s;

    int i = 0;
    int j = s.size() - 1;

    bool flag = true;
    while (i < j)
    {
        if (s[i] == '?' && s[j] == '?')
            flag = false;
        else if (s[i] == '?')
            s[i] = s[j];
        else if (s[j] == '?')
            s[j] = s[i];
        i++;
        j--;
    }

    if (flag)
        cout << s;
    else
        cout << -1;

    return 0;
}