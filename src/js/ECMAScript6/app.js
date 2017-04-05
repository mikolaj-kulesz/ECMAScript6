$(document).ready(() => {

	console.log('ECMAScript6');
	console.log('=======================');

    const moduleBodyData = new bodyData();
    console.log(moduleBodyData.getData());
    const page = moduleBodyData.getData();

    switch(page) {
        case 'let':
            const moduleLet = new Let();
            break;
        case 'const':
            const moduleConst = new Const();
            break;
        case 'template_string':
            const moduleTemplateString = new TemplateString();
            break;
        case 'spread_operator':
            const moduleSpreadOperator = new SpreadOperator();
            break;
        case 'default_parameters':
            const moduleDefaultParameters = new DefaultParameters();
            break;
        case 'obj_literals':
            const moduleObjectLiterals = new ObjectLiterals();
            break;
        case 'arrow_function':
            const moduleArrowFunction = new ArrowFunction();
            break;
        case 'destructuring_assignment':
            const moduleDestructuringAssignment = new DestructuringAssignment();
            break;
        case 'class_syntax':
            const moduleClassSyntax = new ClassSyntax();
            break;
        default:
            //nothing
    }







});