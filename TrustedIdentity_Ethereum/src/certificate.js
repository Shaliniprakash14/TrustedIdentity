Cert = {
    loading: false,
    contracts: {},
  
    load: async () => {
      await Cert.loadWeb3()
      await Cert.loadAccount()
      await Cert.loadContract()
      await Cert.render()
      
    },
  
    // https://medium.com/metamask/https-medium-com-metamask-breaking-change-injecting-web3-7722797916a8
    loadWeb3: async () => {  
      if (typeof web3 !== 'undefined') {
        Cert.web3Provider = web3.currentProvider
        web3 = new Web3(web3.currentProvider)
      } else {
        window.alert("Please connect to Metamask.")
      }
      // Modern dCert browsers...
      if (window.ethereum) {
        window.web3 = new Web3(ethereum)
        try {
          // Request account access if needed
          await ethereum.enable()
          // Acccounts now exposed
          web3.eth.sendTransaction({/* ... */})
        } catch (error) {
          // User denied account access...
        }
      }
      // Legacy dCert browsers...
      else if (window.web3) {
        Cert.web3Provider = web3.currentProvider
        window.web3 = new Web3(web3.currentProvider)
        // Acccounts always exposed
        web3.eth.sendTransaction({/* ... */})
      }
      // Non-dCert browsers...
      else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
      }
    },
  
    loadAccount: async () => {
      // Set the current blockchain account
      Cert.account = web3.eth.accounts[0]
    },
  
    loadContract: async () => {
      // Create a JavaScript version of the smart contract
      const todoList = await $.getJSON('Verification.json')
      Cert.contracts.Verification = TruffleContract(todoList)
      Cert.contracts.Verification.setProvider(Cert.web3Provider)
  
      // Hydrate the smart contract with values from the blockchain
      Cert.todoList = await Cert.contracts.Verification.deployed()
    },
  
    render: async () => {
      // Prevent double render
      if (Cert.loading) {
        return
      }
  
     
  
      // Update Cert loading state
      
  
    
      
      // Render Account
      //$('#account').html("<b>Account Address:</b> "+Cert.account)
  
      // Render Tasks
      await Cert.rendersingleTasks()
  
      // Update loading state
      //Cert.setLoading(false)
    },
    

    //for certificate file
  rendersingleTasks: async () => {
    var queryId = 2
    var url_parts = window.location.search.substring(1);
    var query = url_parts.split("=")
    queryId = query[1]
    // Load the total task count from the blockchain
    const taskCount = await Cert.todoList.taskCount()
    //const $taskTemplate = $('.taskTemplate')

    // Render out each task with a new task template
    
      // Fetch the task data from the blockchain
      const task = await Cert.todoList.tasks(queryId)
      const taskId = task[0].toNumber()
      const taskContent = task[1]
      const taskHash = task[2]
      const taskCompleted = task[3]

      // Create the html for the task
      
      $('.document').html(taskContent )   
     
    }
    
   
  }



  $(() => {
    $(window).load(() => {

       Cert.load()
       
    })
  })
