# import modules
from tkinter import *
from tkinter.font import Font
import tkinter.messagebox
import sqlite3

# class for Front End UI
class Product:
    def __init__(self, root):

        data = Database()
        data.connection()

        self.root = root
        self.root.title("WAREHOUSE INVENTORY MANAGEMENT SYSTEM")
        self.root.geometry("1200x600")
        self.root.config(bg="#159bca")

        # Product Data
        productId = StringVar()
        productName = StringVar()
        productPrice = StringVar()
        productQuantity = StringVar()
        productCompany = StringVar()
        productContact = StringVar()

        # Methods

        def clear():
            print("Product : Clear method called")
            self.txtProductCpny.delete(0, END)
            self.txtProductCtct.delete(0, END)
            self.txtProductId.delete(0, END)
            self.txtProductName.delete(0, END)
            self.txtProductPrice.delete(0, END)
            self.txtProductQty.delete(0, END)

        def insert():
            if len(productId.get()) != 0:
                data.insert(
                    productId.get(),
                    productName.get(),
                    productPrice.get(),
                    productQuantity.get(),
                    productCompany.get(),
                    productContact.get(),
                )
                productList.delete(0, END)
                productList.insert(
                    END,
                    productId.get(),
                    productName.get(),
                    productPrice.get(),
                    productQuantity.get(),
                    productCompany.get(),
                    productContact.get(),
                )

        def show():
            print("Product : Show method called")
            productList.delete(0, END)
            for row in data.show():
                productList.insert(END, row, str(""))

        # Create the Frames

        MainFrame = Frame(self.root, bg="white")
        MainFrame.grid()

        HeadFrame = Frame(MainFrame, padx=50, pady=10, bg="purple", relief=RIDGE)
        HeadFrame.pack(side=TOP)

        self.Title = Label(
            HeadFrame,
            font=("arial", 25, "bold"),
            text="WAREHOUSE INVENTORY MANAGEMENT SYSTEM",
            bg="#159bca",
        )
        self.Title.grid()

        BtnFrame = Frame(
            MainFrame,
            bd=2,
            width=1000,
            height=60,
            padx=50,
            pady=20,
            bg="black",
            relief=RIDGE,
        )
        BtnFrame.pack(side=TOP)

        BodyFrame = Frame(
            MainFrame,
            bd=2,
            width=1000,
            height=400,
            padx=50,
            pady=20,
            bg="pink",
            relief=RIDGE,
        )
        BodyFrame.pack(side=TOP)

        LeftBodyFrame = LabelFrame(
            BodyFrame,
            bd=2,
            width=500,
            height=380,
            padx=20,
            pady=10,
            bg="blue",
            relief=RIDGE,
            font=("arial", 15, "bold"),
            text="Profuct Details: ",
        )

        LeftBodyFrame.pack(side=LEFT)

        RightBodyFrame = LabelFrame(
            BodyFrame,
            bd=2,
            width=300,
            height=380,
            padx=20,
            pady=10,
            bg="yellow",
            relief=RIDGE,
            font=("arial", 15, "bold"),
            text="Profuct information: ",
        )

        RightBodyFrame.pack(side=RIGHT)

        # 1 Product ID Box

        self.labelProductId = Label(
            LeftBodyFrame,
            font=("arial", 15, "bold"),
            text="Product ID: ",
            padx=2,
            bg="white",
            fg="blue",
        )
        self.labelProductId.grid(row=0, column=0, sticky=W)
        self.txtProductId = Entry(
            LeftBodyFrame, font=("arial", 20, "bold"), textvariable=productId, width=35
        )
        self.txtProductId.grid(row=0, column=1, sticky=W)

        # 2 Product Name Box

        self.labelProductName = Label(
            LeftBodyFrame,
            font=("arial", 15, "bold"),
            text="Product Name: ",
            padx=2,
            bg="white",
            fg="blue",
        )
        self.labelProductName.grid(row=1, column=0, sticky=W)
        self.txtProductName = Entry(
            LeftBodyFrame,
            font=("arial", 20, "bold"),
            textvariable=productName,
            width=35,
        )
        self.txtProductName.grid(row=1, column=1, sticky=W)

        # 3 Product Price Box

        self.labelProductPrice = Label(
            LeftBodyFrame,
            font=("arial", 15, "bold"),
            text="Product Price: ",
            padx=2,
            bg="white",
            fg="blue",
        )
        self.labelProductPrice.grid(row=2, column=0, sticky=W)
        self.txtProductPrice = Entry(
            LeftBodyFrame,
            font=("arial", 20, "bold"),
            textvariable=productPrice,
            width=35,
        )
        self.txtProductPrice.grid(row=2, column=1, sticky=W)

        # 4 Product Quantity Box

        self.labelProductQty = Label(
            LeftBodyFrame,
            font=("arial", 15, "bold"),
            text="Quantity: ",
            padx=2,
            bg="white",
            fg="blue",
        )
        self.labelProductQty.grid(row=3, column=0, sticky=W)
        self.txtProductQty = Entry(
            LeftBodyFrame,
            font=("arial", 20, "bold"),
            textvariable=productQuantity,
            width=35,
        )
        self.txtProductQty.grid(row=3, column=1, sticky=W)

        # 5 Product Company Box

        self.labelProductCpny = Label(
            LeftBodyFrame,
            font=("arial", 15, "bold"),
            text="Company: ",
            padx=2,
            bg="white",
            fg="blue",
        )
        self.labelProductCpny.grid(row=4, column=0, sticky=W)
        self.txtProductCpny = Entry(
            LeftBodyFrame,
            font=("arial", 20, "bold"),
            textvariable=productCompany,
            width=35,
        )
        self.txtProductCpny.grid(row=4, column=1, sticky=W)

        # 6 Product Contact Box

        self.labelProductCtct = Label(
            LeftBodyFrame,
            font=("arial", 15, "bold"),
            text="Contact: ",
            padx=2,
            bg="white",
            fg="blue",
        )
        self.labelProductCtct.grid(row=5, column=0, sticky=W)
        self.txtProductCtct = Entry(
            LeftBodyFrame,
            font=("arial", 20, "bold"),
            textvariable=productContact,
            width=35,
        )
        self.txtProductCtct.grid(row=5, column=1, sticky=W)

        # Product Information
        productList = Listbox(
            RightBodyFrame, width=40, height=16, font=("arial", 15, "bold")
        )
        productList.grid(row=0, column=0, padx=8)

        # Buttons for operation

        # Save
        self.btnSave = Button(
            BtnFrame,
            text="Save",
            font=("arial", 15, "bold"),
            height=1,
            width=10,
            bd=4,
            command=insert,
        )
        self.btnSave.grid(row=0, column=0)
        # Show
        self.btnShow = Button(
            BtnFrame,
            text="Show",
            font=("arial", 15, "bold"),
            height=1,
            width=10,
            bd=4,
            command=show,
        )
        self.btnShow.grid(row=0, column=1)
        # Clear
        self.btnClear = Button(
            BtnFrame,
            text="Clear",
            font=("arial", 15, "bold"),
            height=1,
            width=10,
            bd=4,
            command=clear,
        )
        self.btnClear.grid(row=0, column=2)
        # Search
        self.btnSearch = Button(
            BtnFrame,
            text="Search",
            font=("arial", 15, "bold"),
            height=1,
            width=10,
            bd=4,
        )
        self.btnSearch.grid(row=0, column=3)
        # Delete
        self.btnDelete = Button(
            BtnFrame,
            text="Delete",
            font=("arial", 15, "bold"),
            height=1,
            width=10,
            bd=4,
        )
        self.btnDelete.grid(row=0, column=4)
        # Update
        self.btnUpdate = Button(
            BtnFrame,
            text="Update",
            font=("arial", 15, "bold"),
            height=1,
            width=10,
            bd=4,
        )
        self.btnUpdate.grid(row=0, column=5)

        # Back End Operations


class Database:
    def connection(self):
        print("Database : Connection method called")
        con = sqlite3.connect("inventory.db")
        cur = con.cursor()
        query = "create table if not exists product(pid integer primarykey, pname text, price text, qty text,company text, contact txt)"
        cur.execute(query)
        con.commit()
        con.close()
        print("Database : Connection method finished\n")

    def insert(self, pid, name, price, qty, company, contact):
        print("Database : Insert method called")
        con = sqlite3.connect("inventory.db")
        cur = con.cursor()
        query = "insert into product values(?,?,?,?,?,?)"
        cur.execute(query, (pid, name, price, qty, company, contact))
        con.commit()
        con.close()
        print("Database : Insert method finished\n")

    def show(self):
        print("Database : Show method called")
        con = sqlite3.connect("inventory.db")
        cur = con.cursor()
        query = "select * from product"
        cur.execute(query)
        rows = cur.fetchall()
        con.close()
        print("Database : Show method finished\n")

    def delete(self, pid):
        print("Database : Delete method called", pid)
        con = sqlite3.connect("inventory.db")
        cur = con.cursor()
        query = "delete from product where pid=?"
        cur.execute(query, (pid,))
        con.commit()
        con.close()
        print("Database : Delete method finished\n", pid)


if __name__ == "__main__":
    root = Tk()
    application = Product(root)
    root.mainloop()