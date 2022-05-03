# Routes for 'exams'

/
list of exams
no buttons for changing anything
a button for entering the 'change' mode -> navigates to '/change'

/change
list of exams, with Delete and Edit button
    Delete: modified the states, stays in /change
    Edit: navigate to '/edit/:examCode'
a button for Add
a button for entering the 'view' mode -> navigates to '/'

/edit/:examCode
form for entering an exam, default = exam values corresponding to :examCode
a button for Cancel -> navigate to '/change'
a button for Add -> change state, navigate to '/change'


/add
form (*) for entering an exam, default=EMPTY
a button for Cancel -> navigate to '/change'
a button for Add -> change state, navigate to '/change'

(*) same form, with different 'mode' props



