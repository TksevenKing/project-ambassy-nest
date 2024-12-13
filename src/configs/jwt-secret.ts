export const JWT_SECRET = {
    secret: 'KHHGD12DFG45DG15DG4',
};


// NB: ce fichier est creer pour contenir notre cle secret a ne pas expose publiquement mais cacher avec une variable d'environement
// We'll use this to share our key between the JWT signing and verifying steps.
// Do not expose this key publicly. We have done so here to make it clear what the code is doing,
// but in a production system you must protect this key using appropriate measures such as a secrets vault,
// environment variable, or configuration service.