

<code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>

<div>
<input type="text" name="firstName" placeholder="First Name" onChange={this.handleChangeForm1}></input>
<input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChangeForm1}></input>
<input type="text" name="email" placeholder="email address" onChange={this.handleChangeForm1}></input>
<input type="text" name="password" placeholder="password (max 32 characters)" onChange={this.handleChangeForm1}></input>
</div>
<div></div>
<div></div>
<button onClick={this.handleSubmitForm1}>Next</button>