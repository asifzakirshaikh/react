import React from 'react'


const Footer = () => {
  return (
	<>
    <div className="container-fluid bg-blue px-0">
				<div className="container">
				<div className="row">
					<div className="col-lg-4 mx-auto pt-5 text-center bg-light shadow mt-5 py-2">
						<h4 className="display-6 text-blue">Join Our Newsletter!</h4>
						<div className="mt-3">
							<form action="#">
							<div className="mb-3">
								<input type="email" className="form-control rounded-3" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp"/>
							</div>
							<div className="d-grid gap-2 col-12 mx-auto text-center py-3">
									<button type="submit" className="btn btn-blue rounded-3" >Subscribe</button>
								</div>
							</form>
						</div>
						
					</div>
					<p className="text-center py-2 text-white">Edge Linking Inc &copy; 2022.  All rights reserved</p>
				</div> 
				</div>
			</div>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
	<div className="modal-content">
	  <div className="modal-header border-0 p-5">
		<h3 className="fw-bold modal-title" id="exampleModalLabel">Login</h3>
		<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
	  </div>
	  <div className="modal-body p-5">
			  
			<form method="POST" action="#">
			  
			  <div className="mb-4">
				 <input type="emai" className="form-control" name="email" placeholder="User Email *"/>
					
			  </div>
			  
			  
			   <div className="mb-4">
				 <input type="password" className="form-control" name="password" placeholder="Password *" />
				
			  </div>
			  
			  <div className="text-center">
				 <button type="submit" className="btn btn-outline-secondary">Submit</button>
			  </div>
		   </form>
	  </div>
	</div>
  </div>
</div>

</>
  )
}

export default Footer