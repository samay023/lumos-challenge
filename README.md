# Typescript interview template


## Instructions

You may solve any one of the following problems.

This exercise doesn't have a correct or incorrect answer, but it does have requirements that need to be met.
Keep it simple and elegant.

Go code!

### Bank on it!

This exercise is to create the foundational elements of a bank.
The bank needs to support critical elements of what customers need.

* Create a Bank
  * A bank should have accounts
  * Should be able to print out all balances of all accounts
  * Should be able to print out total balance at the bank

* Create bank accounts
  * When you create an account, you can pass in an initial balance (>= 0)
  * An account needs an owner
  * Should allow use to view the current balance
  
* Features
  * An account should be able to transfer funds into it from another account
  * You can't transfer into the same account
  * Transfer amount need to be positive and balance must be >= 0 from source account after transfer

Extension questions
  * Support a join account
  * A bank should have a ledger to keep track of all transactions to date, have a function to print it out
    * It should have source_account, target_account, amount_transferred


### Book Worm!

This exercise is to create the foundational elements of a library.

The library should be able to the minimum that an eager bookworm would like to do.

* Create a Library
    * A library should have books
    * Should be able to print out all the books in the library
    * Should be able to print out all the available books in the library
    * Should be able to see all books borrowed out

* Allow books to be borrowed
    * Add a new user to the library
    * Allow a user to borrow a book
    * A user can't borrow a book if it's currently loaned out to someone else
    * Once a book is loaned out, it should print out the return date
    * The return date should be 3 weeks from the data it's borrowed

Extensions
* Provide support for multiple copies of the same book to exist
* Every day a book is late, the patron incurs a fee of $1 a day
  * Write a new function for calculating the fee when a book is returned on a certain date
  * Each book can only be borrowed for 3 weeks (21 days) before fees start accruing

