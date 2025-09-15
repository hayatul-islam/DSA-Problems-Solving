#include <bits/stdc++.h>
using namespace std;

int main()
{
    string s;
    cin >> s;

    bool flag = false;
    bool is_dot = false;

    string num;
    string dot_n = "0";

    for (char c : s)
    {
        if (c == '.')
            is_dot = true;

        if (is_dot)
        {
            dot_n += c;
            if (c != '0' && c != '.')
                flag = true;
        }
        else
            num += c;
    }

    if (flag)
        cout << "float " << num << " " << dot_n;
    else
        cout << "int " << num;

    return 0;
}