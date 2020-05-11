/* exported translate_br */
var translate_br = {
    header_wellcome : 'Stellar é uma plataforma que conecta bancos, sistemas de pagamentos, e pessoas.',
    login_desc : 'Você poderá utilizar uma chave secreta apenas para contas já existentes. Isso é devido ao cliente desktop armazenar suas informações de login em seu computador, então sua conta estará tão segura quanto seu computador.',
    open_wallet: 'Acessar Carteira',
    create_wallet: 'Criar Carteira',
    open_account : 'Acessar conta',
    open_temp_act: 'Carteira temporária',
    select_file : 'Selecionar arquivo da conta',
    create_new_account : 'Criar conta',
    create_new_account_info : 'Sua carteira criará um arquivo local para a senha de sua escolha. O arquivo será criptografado, porém não é uma maneira recomendada de acessar sua carteira. Por favor, considere uma carteira de hardware.',
    account_password : 'Senha da conta',
    open_existed_account : 'Acessar conta existente',
    create_blank : 'Gerar conta',
    create_by_secret : 'Criptografar chave existente',
    encrypt_new_file : 'Criptografar sua nova conta',
    wallet_file : 'arquivo da carteira',
    password : 'Senha',
    pwd_weak : 'Sua senha não é segura. Sua senha não possui uma combinação de letras, números e simbolos.',
    password_confirm : 'Confirmar senha',
    pwd_not_match : 'As senhas não são iguais',
    encrypt_account : 'Criptografar conta',
    cancel : 'Cancelar',
    create_secret : 'Criar conta através de uma chave secreta',
    enter_secret : 'Informe sua chave secreta',
    invalid_account: 'Conta inválida',
    invalid_secret : 'Chave inválida',
    important : 'IMPORTANTE',
    wallet_created: 'Sua nova conta foi criptografada. Certifique-se de fazer vários backups deste arquivo.',
    security_notice : 'A chave secreta abaixo dá acesso ao seu dinheiro no caso improvável de perder sua senha. Com essa chave secreta, qualquer pessoa pode recuperar seu dinheiro. Então, por favor, guarde-o em algum lugar PRIVADO E SEGURO.',
    show_password : 'Mostrar senha',
    hide_password : 'Ocultar senha',
    account_address : 'Endereço da conta',
    stellar_address : 'Endereço Stellar',
    secret_key : 'Chave secreta e QRCode:',
    show_secret: 'Mostrar minha chave secreta',
    hide_secret: 'Ocultar chave secreta',
    are_you_sure_secret: 'Você está em um local seguro onde ninguém ou câmeras estão visualizando sua tela?',
    save_safe: 'Você já salvou sua chave secreta em um local seguro?',
    yes_save: 'Sim, Eu salvei minha chave secreta.',
    ledger_wallet: 'Carteira Ledger',
    ledger_wallet_connect: 'Por favor, conecte a carteira Ledger.',
    /** Balance & Trust **/
    balance : 'Saldo',
    estimated : 'Valor estimado em ativos:',
    reserve   : 'Reserva:',
    total : 'Total',
    trust : 'Confiança',
    asset : 'Ativo',
    trust_limit : 'Limite de confiança',
    add_trust : 'Conceder confiança para âncoras conhecidos pela comunidade Stellar',
    trust_src : 'Esta é uma lista de âncoras da comunidade Stellar.',
    trust_note: 'Nota: NÃO nos responsabilizamos pela confiança em nenhuma dessas âncoras.',
    trust_remove : 'Revogar confiança',
    trust_remove_desc : 'A confiança é removível quando o saldo é 0',
    trust_removeing : 'Removendo...',
    trust_add : 'Conceder confiança em ',
    fed_add : 'Adicionar confiança via federação',
    fed_desc: 'Você pode adicionar confiança usando o URL da federação.',
    fed_url : 'URL de federação',
    fed_unable : 'Não é possível encontrar moedas para',
    fed_loading: 'Carregar moedas para',
    manual_add : 'Conceder confiança manualmente.',
    manual_desc: 'Você pode conceder confiança manualmente se souber o ID da conta e o código do ativo',
    issuer_invalid : 'O ID da conta do emissor do ativo deve ser um ID de conta válido',
    memo_invaid    : 'Memo inválido.',
    trust_granted  : 'Confiança concedida!',

    /** send **/
    send : 'Transferir',
    send_pick : 'Escolha um ativo para transferir',
    send_desc : 'Atualmente, suportamos apenas o envio de recursos diretamente.',
    send_note : 'Nota: O endereço de destino também deve confiar no ativo que você está enviando.',
    recipient : 'Destinatário',
    memo: 'Memo',
    invalid_domain : 'está indisponível',
    account_loading: 'Loading account for',
    select_asset : 'Por favor, selecione um ativo para enviar.',
    sending_to   : 'Enviando para',
    send_done    : 'Ativo enviado com sucesso.',
    not_funded   : 'Não consolidado. Para criar esta conta, envie pelo menos 1 {{name}}s ({{code}}).',
    can_accept   : 'A conta pode aceitar',

    contacts : 'Contatos',
    contact  : 'Contato',
    address  : 'Endereço',
    add_contact : 'Adicionar contato',
    edit        : 'editar',
    leave_blank : 'Leave blank if not applicable',
    Delete      : 'Remover',
    are_you_sure: 'Tem certeza?',
    no_contact  : "Você ainda não tem contatos. Clique no botão 'Adicionar contato' no canto superior direito para adicionar um novo contato.",
    error_need_contact : 'Por favor, informe o contato.',
    error_same_contact : 'Este contato já está cadastrado.',
    error_need_address : 'Informe um endereço.',
    error_invalid_address : 'Endereço inválido.',
    error_already_name    : 'Você já possui um outro contato com este mesmo nome.',

    /** Convert **/
    convert       : 'Conversões',
    convert_title : 'Converta uma moeda em outra',
    convert_input : 'Por favor, insira os detalhes da conversão.',
    convert_nopath: 'Nenhum caminho aceitável. Certifique-se de que sua conta tenha fundos suficientes.',
    receive       : 'Receber',
    calculating   : 'Calculando...',
    path          : 'Caminho:',

    /** History **/
    history: 'Histórico',
    payments: 'Pagamentos',
    effects: 'Effects',
    trades: 'Negociações',
    latest_payments : 'Últimas transações',
    latest_effects : 'Latest Effects',
    latest_trades : 'Últimas Negociações',
    you         : 'Você',
    date        : 'Data',
    account_id  : 'Conta',
    operation   : 'Operação',
    loading     : 'Carregando...',
    load_more   : 'Carregar mais...',
    no_more     : 'Não há mais transações',
    set_options : 'Options',
    set_data    : 'Data',
    batch       : 'Batch',
    source_account : 'Source Account',
    inflation_op   : 'Inflation',
    accountMerge : 'Merge',
    manageBuyOffer : 'Buy',
    manageSellOffer : 'Sell',

    choose : 'Escolher',
    example : 'exemplo',
    refresh : 'Atualizar',
    asset_code : 'Código do ativo',
    issuer_id : 'ID da conta do emissor',
    amount : 'Quantidade',
    optional : 'Opcional',
    required : 'Obrigatório',
    require_memo : 'Destinatário requer um memo. Por favor, verifique se está correto.',

    trade : 'Negociar',
    normal: 'Normal',
    sent  : 'Enviado',
    received : 'Recebido',
    created : 'Criado',
    offer : 'Offer',
    offer_cancel    : 'Cancelar',
    offer_canceling : 'Cancelando...',
    price : 'Preço',
    buy   : 'Comprar',
    sell  : 'Vender',
    orderbook : 'Livro de negociações',
    buy_offers : 'Ofertas de compra',
    sell_offers: 'Ofertas de venda',
    depth : 'Depth',
    manager_offer : 'Gerenciar ofertas',
    your_buy_offers  : 'Suas ofertas de compra',
    your_sell_offers : 'Suas ofertas de venda',
    you_have      : 'Você possui',
    order_amount  : 'Quantidade',
    price_of_each : 'Preço por unidade',
    order_value   : 'Valor da ordem',
    offer_success : 'Oferta criada com sucesso',
    trade_pick : 'Escolha um ativo para negociar',
    as_base    : 'Como ativo base',
    as_counter : 'Como contra ativo',
    base_asset    : 'Ativo base',
    counter_asset : 'Contra ativo',
    pick_book  : 'Para ver outros livros de negociação, escolha',
    trade_pair : 'seu par de negociação',
    pick_trade : 'Para negociar, volte para',
    trade_page : 'página de negociações',
    advanced   : 'Avançado',
    buying     : 'Comprando',
    selling    : 'Vendendo',

    /** ICO **/
    ico : 'ICO',
    ico_stellar : 'Utilizando Stellar para ICOs',
    ico_note: 'Nota: Antes de se envolver em uma OIC, investidores e entusiastas em criptomoedas precisam considerar os riscos envolvidos ao participar. NÃO recomendamos nenhum desses projetos.',
    ico_instruction: 'Depois de adicionar a linha de confiança, selecione "Negociar - Conversões". Você pode usar qualquer moeda para comprar o ICO.',

    /** SIGN OFFLINE **/
    sign_offline: 'Offline',
    paste_xdr: 'Por favor, cole sua transação XDR',
    sign_transaction: 'Assinar transação',

    /** Setting & security **/
    settings : 'Configurações',
    network  : 'Rede',
    proxy    : 'Proxy',
    selected_net    : 'Current Network',
    switch_net      : 'Switch Network',
    switch_net_desc : 'You can switch between different Networks. The testnets are for testing purposes - they are also occasionally reset, so don’t get too attached to them.',
    public_net : 'Public Network',
    test_net   : 'Test Network',
    other_net  : 'User defined',
    'Stellar Public Network' : 'Rede pública Stellar',
    'Stellar Test Network' : 'Rede de testes Stellar',
    'User defined' : 'Usuário definido',
    public_url : 'Public Net URL',
    test_url   : 'Test Net URL',
    other_url  : 'Network URL',
    passphrase : 'Passphrase or id',
    coin_ticket: 'Native asset code',
    base_fee     : 'Taxa Base',
    base_fee_desc: 'A taxa para uma transação é o número de operações que a transação contém multiplicada pela taxa base. 100 stroops = 0.00001',
    timeout      : 'Tempo limite de transação',
    timeout_desc : 'É possível que o status de sua transação seja determinado após um longo período se a rede estiver altamente congestionada. O número de tempo limite não pode ser negativo. Se o valor for 0, a transação é boa indefinidamente.',
    fed_protocol: 'Federation Protocol',
    fed_network : 'Nome do Serviço (~)',
    fed_network_desc : 'Você pode utilizar ~name no lugar de name*federation.domain.',
    you_name_is : 'Seu nome é',
    fed_ripple  : 'Serviço Ripple',
    fed_ripple_desc : 'Quando você insere um endereço Ripple, ele usará o domínio abaixo para analisar.',
    fed_bitcoin  : 'Serviço Bitcoin',
    fed_bitcoin_desc : 'Quando você insere um endereço Bitcoin, ele usará o domínio abaixo para analisar.',
    save     : 'Salvar',
    security : 'Segurança',
    inflation : 'Inflation Destination',
    inflation_desc : 'Novos {{name}}s são adicionados à rede a uma taxa de 1% ao ano. A cada semana, o protocolo distribui esses {{name}}s para qualquer conta que ultrapasse 0,05% dos "votos" de outras contas na rede.',
    inflation_done : 'Inflation Destination was set.',
    inflation_options      : 'Inflation pools',
    inflation_options_desc : 'You can join one of the following inflation pools. You can check their website to check the votes and the fee.',
    inflation_xlmpool  : 'Vote to xlmpool.com',
    inflation_lumenaut : 'Vote to lumenaut.net',
    inflation_moonpool : 'Vote to moonpool.space',
    inflation_donation : 'Nos apoie',
    inflation_donation_desc : 'A RippleFox não pede doações, mas ao invés disso, pedimos por votos.',
    inflation_fox  : 'Vote to RippleFox',

    home_domain : 'Gerenciador de domínios',
    domain_desc : 'Um nome de domínio que pode ser adicionado opcionalmente à conta. Os clientes podem procurar mais detalhes neste domínio.',
    domain_done : 'Home Domain was set.',
    manage_data : 'Gerenciador de dados',
    data_desc1  : 'Permite que você defina, modifique ou exclua uma entrada de dados (par nome / valor) anexada a uma conta específica. Uma conta pode ter uma quantidade arbitrária de DataEntries anexada a ela. Cada DataEntry aumenta o saldo mínimo necessário para ser mantido pela conta.',
    data_desc2  : 'DataEntries pode ser usado para coisas específicas do aplicativo. Eles não são usados pelo protocolo Stellar central.',
    data_key    : 'Nome (chave)',
    data_value  : 'Valor',
    data_done   : 'Data entry definido.',
    delete_account : 'Deletar Conta',
    merge_desc     : 'Operação de risco! Este procedimento transfere o saldo nativo (a quantidade de {{code}} uma conta é retida) para a conta de destino e remove sua conta atual.',
    dest_account   : 'Conta de destino',
    delete_warning : 'ESTOU CIENTE E QUERO CONTINUAR >>',
    back           : 'Voltar',
    merge_done     : 'Sua conta foi mesclada ao destino.',

    /** Deposit & withdrawl **/
    service : 'Serviços',
    deposit_withdraw : 'Depositos/Retiradas',
    deposit  : 'Deposito',
    withdraw : 'Retirar',
    dw_coin  : 'Depositando ou retirando moedas',
    dw_desc_line1 : 'Se você quiser depositar ou retirar fundos, seja em fiat ou de outros blockchains, você pode usar um serviço de âncora para fazer isso.',
    dw_desc_line2 : 'Você encontrará uma seleção de provedores de serviços nas guias abaixo. Comece escolhendo um provedor. ',
    anchor   : 'Âncora',
    no_trust : 'Por favor, crie primeiro a linha de confiança.',
    alipay    : 'Alipay',
    bank_card : 'Banco',
    fill_form : 'Preencha o formulário corretamente.',
    analyzing : 'Analisando ...',
    will_recv : 'O destinatário receberá',
    can_send  : 'Você pode enviar',

    Stellar : 'Stellar',
    stellar_desktop_client : 'Carteira Foxlet',
    app_open_source  : '',
    app_safe_notice  : 'O cliente armazena suas informações de login criptografadas localmente no seu computador. Por favor, faça um backup do seu segredo com cuidado.',
    app_feedback     : 'Foxlet é open source agora! Você pode nos encontrar no GitHub:',
    trade_volume : 'Volume de negociações',
    wallet : 'Carteira',
    version: 'Versão',
    logout : 'Sair',
    new_version_available: 'Nova versão disponível!',

    /** StellarGuard **/
    stellarguard_submitted: 'Sua transação foi enviada para StellarGuard e está aguardando autorização.',
    stellarguard_authorize: 'Autorizar Transação',

    /** FIC Network **/
    ficnetwork: 'FIC ICO',
    ficnetwork_address: 'Endereço ETH',
    ficnetwork_coins: 'Moedas',
    ficnetwork_claim: 'Claim',
    ficnetwork_history: 'Histórico',
    enter_address: 'Enter whitelisted ETH address',
    invalid_eth: 'Endereço Ethereum inválido',
    eth_address: 'endereço ETH',
    options: 'Opções',
    remove: 'Remover',
    add: 'Adicionar',
    next: 'Próximo',
    fic_claimed: "Claimed",
    fic_available: "Disponível",
    lockup: "Lockup",
    actions: "Ações",
    claim: "Claim",
    unlock: "Desbloquear",
    claim_unlock: "Claim & Unlock",
    fic_address: "Seu endereço FIC:",
    select_eth: "Selecione o endereço ETH na lista de permissões:",
    select_lockup: "Selecione o período de bloqueio:",
    select_amount: "Selecione o valor FIC:",
    select_all: "Selecionar todos",
    remaining: "remanescente",
    terms: "Concordo com os termos",
    days: "dias",
    from_address: "A partir do seu endereço ETH na lista de autorizações",
    send_to: "Enviar para o endereço do contrato inteligente",
    payload: "This payload (as Data field)",
    checking: "verificando...",
    done: "Pronto",
    available_in: "Disponível em",
    now: "Agora",
    sendMyEtherWallet: "Enviar através de MyEtherWallet",


    /** Error **/
    NotFoundError : 'O recurso não foi encontrado. Você deve ter pelo menos 1 {{name}} na sua conta para que ele seja ativado! Cada linha de confiança ou oferta requer uma reserva de 0.5 {{name}} além disso. Para facilitar, envie pelo menos 3 {{name}}s para a conta.',
    changeTrustLowReserve : 'Não há fundos suficientes para criar uma nova linha de confiança. Cada linha de confiança requer uma reserva de 0.5 {{name}}.'
  }
