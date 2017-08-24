#! /usr/bin/env python
# -*- coding: utf-8 -*-

import cgi
import smtplib


def get_form():
    """Get the HTTP POST form contents

    :return: {str} form fields as single strings
    """
    data = cgi.FieldStorage()

    datelist = ['date1', 'date2', 'date3', 'date4']
    timelist = ['time1', 'time2', 'time3']
    f_date = ""
    f_time = ""
    f_name = data.getvalue('name')
    f_email = data.getvalue('email')
    f_platz = data.getvalue('platz')

    for d in datelist:
        if data.getvalue(d) is not None:
            f_date = data.getvalue(d)

    for t in timelist:
        if data.getvalue(t) is not None:
            f_time = data.getvalue(t)

    return f_name, f_platz, f_email, f_date, f_time


def send_email(user, pwd, recipient, subject, body):
    """Function to send a new email message via a gmail account

    :param user: {str} your gmail address (FROM)
    :param pwd: {str} your gmail password
    :param recipient: {str} recipient email address (TO)
    :param subject: {str} email subject
    :param body: {str} email message / body text
    """

    to_addr = recipient if type(recipient) is list else [recipient]

    message = """From: %s\nTo: %s\nSubject: %s\n\n%s
    """ % (user, ", ".join(to_addr), subject, body)
    try:
        server_ssl = smtplib.SMTP_SSL("smtp.gmail.com", 465)
        server_ssl.ehlo()
        server_ssl.login(user, pwd)
        server_ssl.sendmail(user, recipient, message)
        server_ssl.close()
    except:
        print """Content-Type: text/html\n
        failed to send mail"""


if __name__ == "__main__":
    gmail = "erikasdiner@gmail.com"
    addr_to = "janwinkler@bluewin.ch, semianneurohr@hotmail.com, arnimueller.alex@bluewin.ch"
    passwrd = "erikas diner is the place to be"
    subj = "Bibimbap Reservation"
    name, platz, email, date, time = get_form()
    formcontent = """
        Neue Reservation:\n\n
        Name:\t%s\n
        Plätze:\t%s\n
        E-Mail:\t%s\n
        Datum:\t%s\n
        Zeit:  \t%s
        """ % (name, platz, email, date, time)

    send_email(gmail, passwrd, addr_to, subj, formcontent)
    print "Location:    https://erikas.ch/bibimbap/\r\n\r"
