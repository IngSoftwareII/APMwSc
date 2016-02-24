from flask import request, session, Blueprint, json

prod = Blueprint('prod', __name__)


@prod.route('/prod/ACrearProducto', methods=['POST'])
def ACrearProducto():
    #POST/PUT parameters
    params = request.get_json()
    results = [{'label':'/VProductos', 'msg':['Producto creado']}, {'label':'/VCrearProducto', 'msg':['Error al crear producto']}, ]
    res = results[0]
    #Action code goes here, res should be a list with a label and a message


    #Action code ends here
    if "actor" in res:
        if res['actor'] is None:
            session.pop("actor", None)
        else:
            session['actor'] = res['actor']
    return json.dumps(res)



@prod.route('/prod/AModifProducto', methods=['POST'])
def AModifProducto():
    #POST/PUT parameters
    params = request.get_json()
    results = [{'label':'/VProductos', 'msg':['Producto actualizado']}, ]
    res = results[0]
    #Action code goes here, res should be a list with a label and a message


    #Action code ends here
    if "actor" in res:
        if res['actor'] is None:
            session.pop("actor", None)
        else:
            session['actor'] = res['actor']
    return json.dumps(res)



@prod.route('/prod/VCrearProducto')
def VCrearProducto():
    res = {}
    if "actor" in session:
        res['actor']=session['actor']
    #Action code goes here, res should be a JSON structure

    if 'usuario' not in session:
      res['logout'] = '/'
      return json.dumps(res)
    res['usuario'] = session['usuario']
    res['fPila_opcionesEscala'] = [
      {'key':1,'value':'Alta/Media/Baja'},
      {'key':2,'value':'Entre 1 y 20'}]

    #Action code ends here
    return json.dumps(res)



@prod.route('/prod/VProducto')
def VProducto():
    #GET parameter
    idPila = request.args['idPila']
    res = {}
    if "actor" in session:
        res['actor']=session['actor']
    #Action code goes here, res should be a JSON structure

    if 'usuario' not in session:
      res['logout'] = '/'
      return json.dumps(res)
    res['usuario'] = session['usuario']
<<<<<<< HEAD

    # Obtenemos los datos asociados al producto
    oBacklog   = backlog()
    actorsList = oBacklog.actorsAsociatedToProduct(idPila)
    accionList = oBacklog.accionsAsociatedToProduct(idPila)
    objectList = oBacklog.objectivesAsociatedToProduct(idPila)
    #sprintList = oBacklog.sprintsAsociatedToProduct(idPila)
    
    # Mostramos los datos en la vista.
    res['data3'] = [{'idActor':act.A_idActor,'descripcion':act.A_nameActor + ' : ' + act.A_actorDescription}for act in actorsList]
    res['data5'] = [{'idAccion':acc.AC_idAccion , 'descripcion':acc.AC_accionDescription}for acc in accionList]
    res['data7'] = [{'idObjetivo':obj.O_idObjective, 'descripcion':obj.O_descObjective } for obj in objectList]
    #res['data9'] = [{'idSprint':spr.S_idSprint, 'descripcion':spr.S_sprintDescription } for spr in sprintList]

    # Buscamos el producto actual
    result = oBacklog.findIdProduct(idPila)
     
    # Mostramos los valores seleccionados
    res['fPila'] = {'idPila':idPila,'nombre': result.BL_name,'descripcion':result.BL_description,'escala':result.BL_scaleType}
    res['fPila_opcionesEscala'] = [{'key':1,'value':'Alta/Media/Baja'}, {'key':2,'value':'Entre 1 y 20'}]
    
    # Guardamos el id del producto
    session['idPila'] = idPila
    res['idPila']     = idPila
    
=======
    idPila = int(request.args.get('idPila', 1))
    pilas = [{'idPila':1, 'nombre':'Pagos en línea', 'descripcion':'Pagos usando tarjeta de débito', 'escala':1},
             {'idPila':2, 'nombre':'Recomendaciones de playas', 'descripcion':'Red social para playeros consumados', 'escala':2},
             {'idPila':3, 'nombre':'Tu taxi seguro', 'descripcion':'Toma un taxi privado de forma segura', 'escala':1}, ]
    res['fPila'] = pilas[idPila-1]
    res['data3'] = [{'idActor':1, 'descripcion':'Actor 1'}, {'idActor':2, 'descripcion':'Actor 2'}, {'idActor':3, 'descripcion':'Actor 3'},  ]
    res['data5'] = [{'idAccion':1, 'descripcion':'Accion 1'}, {'idAccion':2, 'descripcion':'Accion 2'}, {'idAccion':3, 'descripcion':'Accion 3'}, {'idAccion':4, 'descripcion':'Accion 4'}, ]
    res['data7'] = [{'idObjetivo':1, 'descripcion':'Objetivo 1'}, {'idObjetivo':2, 'descripcion':'Objetivo 2'}, {'idObjetivo':3, 'descripcion':'Objetivo 3'}, {'idObjetivo':4, 'descripcion':'Objetivo 4'}, {'idObjetivo':5, 'descripcion':'Objetivo 5'},  ]
    res['idPila'] = idPila
    res['fPila_opcionesEscala'] = [
      {'key':1,'value':'Alta/Media/Baja'},
      {'key':2,'value':'Entre 1 y 20'}]

    #Action code ends here
>>>>>>> 4b889625c5354c2e8820abbf9cb3b19d2e4b3a2e
    return json.dumps(res)



@prod.route('/prod/VProductos')
def VProductos():
    res = {}
    if "actor" in session:
        res['actor']=session['actor']
    #Action code goes here, res should be a JSON structure

    if 'usuario' not in session:
      res['logout'] = '/'
      return json.dumps(res)
    res['usuario'] = session['usuario']
    res['data0'] = [{'idPila':1, 'nombre':'Pagos en línea'}, {'idPila':2, 'nombre':'Recomendaciones de playas'}, {'idPila':3, 'nombre':'Tu taxi seguro'}, ]

    #Action code ends here
    return json.dumps(res)





#Use case code starts here


#Use case code ends here

